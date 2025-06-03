import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Quiz() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const quiz = JSON.parse(localStorage.getItem("quizQuestions"));
      if (quiz) {
        setQuizQuestions(quiz);
        setLoading(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load quiz questions. Please try again later.",
        });
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  const handleAnswerChange = (option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
  };

  const handleNext = () => setCurrentQuestion((prev) => prev + 1);
  const handlePrevious = () => setCurrentQuestion((prev) => prev - 1);

  const handleFinish = () => {
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
        ${
          correctCount === quizQuestions.length
            ? "<p>Perfect score! Well done!</p>"
            : "<p>Review the questions you missed.</p>"
        }
      `,
      confirmButtonText: "OK",
    });
  };

  if (loading) return <p className="text-center mt-5 text-muted">Loading quiz...</p>;
  if (quizQuestions.length === 0) return <p className="text-center mt-5 text-muted">No quiz questions available.</p>;

  const quiz = quizQuestions[currentQuestion];

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="bg-white shadow-lg rounded-4 p-4 mb-4">
            <div className="text-center mb-3">
              <h2 className="fw-bold text-primary">🧠 Quiz Challenge</h2>
              <p className="text-secondary">
                Question <strong>{currentQuestion + 1}</strong> of{" "}
                <strong>{quizQuestions.length}</strong>
              </p>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{
                    width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="mb-4">
              <h5 className="fw-semibold mb-3">{quiz.question}</h5>
              <div className="list-group">
                {quiz.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === option;
                  return (
                    <label
                      key={index}
                      htmlFor={`option-${currentQuestion}-${index}`}
                      className={`list-group-item list-group-item-action py-3 px-4 mb-2 rounded ${
                        isSelected ? "list-group-item-info" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion}`}
                        id={`option-${currentQuestion}-${index}`}
                        className="form-check-input me-2"
                        value={option}
                        checked={isSelected}
                        onChange={() => handleAnswerChange(option)}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap gap-2">
              <button
                className="btn btn-outline-secondary"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                ⬅ Previous
              </button>

              {currentQuestion < quizQuestions.length - 1 ? (
                <button className="btn btn-primary" onClick={handleNext}>
                  Next ➡
                </button>
              ) : (
                <button className="btn btn-success" onClick={handleFinish}>
                  ✅ Finish
                </button>
              )}
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}
