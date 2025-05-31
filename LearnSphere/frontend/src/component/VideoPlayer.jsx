import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; 

const normalizeYouTubeUrl = (url) => {
  let videoId = "";
  let queryParams = "";
  
  if (url.includes("youtu.be/")) {
    const parts = url.split("youtu.be/")[1].split("?");
    videoId = parts[0];
    queryParams = parts[1] ? `&${parts[1]}` : "";
  } else if (url.includes("youtube.com/watch?v=")) {
    const parts = url.split("v=");
    videoId = parts[1].split("&")[0];
    queryParams = parts[1].split("&").slice(1).join("&");
    queryParams = queryParams ? `&${queryParams}` : "";
  } else if (url.includes("youtube.com/embed/")) {
    const parts = url.split("embed/")[1].split("?");
    videoId = parts[0];
    queryParams = parts[1] ? `&${parts[1]}` : "";
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&muted=1${queryParams}` : "";
};

export default function VideoPlayer() {
  const { url } = useParams();
  const videourl = decodeURIComponent(url || "");
  const embedUrl = normalizeYouTubeUrl(videourl);

  console.log("Input URL:", videourl);
  console.log("Embed URL:", embedUrl);

  const [lectures, setLectures] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [referenceLinks, setReferenceLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // State to track selected answers

  const fetchLectures = async () => {
    try {
      const response = await axios.get("http://localhost:5000/lectures");
      if (response.data) {
        setLectures(response.data);
      }
    } catch (err) {
      console.error("Error fetching lectures:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  useEffect(() => {
    if (lectures.length > 0) {
      let foundQuiz = [];
      let foundReferenceLink = null;

      for (const lecture of lectures) {
        const topic = lecture.topics.find((t) => t.videoUrl === videourl);
        if (topic) {
          foundQuiz = topic.quiz || [];
          foundReferenceLink = topic.referenceLink;
          break;
        }
        const additionalTopic = lecture.additionalTopics.find((t) => t.videoUrl === videourl);
        if (additionalTopic) {
          foundQuiz = additionalTopic.quiz || [];
          foundReferenceLink = additionalTopic.referenceLink;
          break;
        }
      }

      setQuizQuestions(foundQuiz);
      setReferenceLinks(foundReferenceLink ? [foundReferenceLink] : []);
      setSelectedAnswers({}); 
    }
  }, [lectures, videourl]);

  const handleAnswerChange = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length !== quizQuestions.length) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete",
        text: "Please answer all questions before submitting!",
        confirmButtonText: "OK",
      });
      return;
    }

    let correctCount = 0;
    quizQuestions.forEach((quiz, index) => {
      if (selectedAnswers[index] === quiz.correctAnswer) {
        correctCount++;
      }
    });

    const score = `${correctCount}/${quizQuestions.length}`;
    const percentage = ((correctCount / quizQuestions.length) * 100).toFixed(2);

    Swal.fire({
      icon: correctCount === quizQuestions.length ? "success" : "info",
      title: "Quiz Results",
      html: `
        <p>You got <strong>${score}</strong> correct!</p>
        <p>Score: <strong>${percentage}%</strong></p>
        ${correctCount === quizQuestions.length ? "<p>Perfect score! Well done!</p>" : "<p>Review the questions you missed.</p>"}
      `,
      confirmButtonText: "OK",
    });
  };

  if (!embedUrl) {
    return (
      <div className="container my-5">
        <h2 className="text-center text-danger">Invalid or missing video URL</h2>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="text-primary mb-4">Course Video</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="ratio ratio-16x9">
            <iframe
              src={embedUrl}
              title="Course Video"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-primary mb-4">Quiz</h3>
        {loading ? (
          <p className="text-muted">Loading quiz questions...</p>
        ) : quizQuestions.length > 0 ? (
          <>
            <div className="row g-4">
              {quizQuestions.map((quiz, index) => (
                <div key={index} className="col-md-6">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Question {index + 1}</h5>
                      <p className="card-text">{quiz.question}</p>
                      <ul className="list-group list-group-flush">
                        {quiz.options.map((option, i) => (
                          <li key={i} className="list-group-item">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              id={`option-${index}-${i}`}
                              className="form-check-input me-2"
                              value={option}
                              checked={selectedAnswers[index] === option}
                              onChange={() => handleAnswerChange(index, option)}
                            />
                            <label htmlFor={`option-${index}-${i}`} className="form-check-label">
                              {option}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit Answers
              </button>
            </div>
          </>
        ) : (
          <p className="text-muted">No quiz questions available for this video.</p>
        )}
      </div>

      <div>
        <h3 className="text-primary mb-4">Reference Links</h3>
        {loading ? (
          <p className="text-muted">Loading reference links...</p>
        ) : referenceLinks.length > 0 ? (
          <div className="list-group">
            {referenceLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                {link.title || "Reference Link"}
                <span className="badge bg-primary rounded-pill">Visit</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-muted">No reference links available for this video.</p>
        )}
      </div>
    </div>
  );
}