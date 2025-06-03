import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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

  const [lectures, setLectures] = useState([]);
  const [referenceLinks, setReferenceLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [explanation, setExplanation] = useState(null);
  const [title, setTitle] = useState(null);

  const fetchLectures = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/lectures`);
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
      let explanation = null;
      let title = null;

      for (const lecture of lectures) {
        const topic = lecture.topics.find((t) => t.videoUrl === videourl);
        if (topic) {
          foundQuiz = topic.quiz || [];
          explanation = topic.explanation;
          foundReferenceLink = topic.referenceLink;
          title = topic.title;
          break;
        }
        const additionalTopic = lecture.additionalTopics.find((t) => t.videoUrl === videourl);
        if (additionalTopic) {
          foundQuiz = additionalTopic.quiz || [];
          explanation = additionalTopic.explanation;
          foundReferenceLink = additionalTopic.referenceLink;
          title = additionalTopic.title;
          break;
        }
      }

      localStorage.setItem("quizQuestions", JSON.stringify(foundQuiz));
      setReferenceLinks(foundReferenceLink ? [foundReferenceLink] : []);
      setExplanation(explanation);
      setTitle(title);
    }
  }, [lectures, videourl]);

  if (!embedUrl) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center fs-4">
          Invalid or missing video URL
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm mb-5 border-0">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 fw-bold text-dark">{title || "Topic Title"}</h2>
          <div className="ratio ratio-16x9 rounded overflow-hidden shadow mb-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <iframe
              src={embedUrl}
              title="Course Video"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              allowFullScreen
              className="rounded"
            />
          </div>

          <section className="mb-5">
            <h4 className="mb-3 text-secondary border-bottom pb-2 text-center mt-5">Summary</h4>
            <p className="text-muted fs-5" style={{ whiteSpace: "pre-line", lineHeight: "1.7" }}>
              {explanation || "No explanation available for this topic."}
            </p>
          </section>

          <section className="mb-5">
            <h4 className="mb-3 text-secondary border-bottom pb-2 text-center">Reference Links</h4>
            {loading ? (
              <p className="text-center text-muted fst-italic">Loading reference links...</p>
            ) : referenceLinks.length > 0 ? (
              <ul className="list-group shadow-sm rounded">
                {referenceLinks.map((link, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark fw-semibold">
                      {link.title || "Reference Link"}
                    </a>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Visit
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted fst-italic">No reference links available for this video.</p>
            )}
          </section>

          <div className="text-center">
            <Link to={`/quiz`}>
              <button className="btn btn-primary btn-lg px-5 fw-bold shadow-sm" style={{ letterSpacing: "0.1em" }}>
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
