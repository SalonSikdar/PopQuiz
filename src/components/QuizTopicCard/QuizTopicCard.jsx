import React from "react";
import { Link } from "react-router-dom";

import "./QuizTopicCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";

function QuizTopicCard({ quiz }) {
  const handleCurrentQuiz = (e) => {
    // (e) => {

    // }
    localStorage.setItem("curQuiz", JSON.stringify(quiz));
    localStorage.setItem("curQuestion", 0);
    localStorage.setItem("attempts", []);
    e.preventDefault();
    window.location.href = "/rules";
  };
  return (
    <div className="space-around" style={{ display: "flex", flex: 1 }}>
      <div className="card mb-3 purple-shadow">
        <h3 className="card-header">{quiz.title}</h3>
        <div className="card-body">
          <h5 className="card-title">{quiz.tagLine}</h5>
        </div>
        <div className="card-body img-container">
          <img className="quiz-img" src={quiz.image} alt="quiz cover" />
        </div>
        <div className="card-body quiz-prompt">
          <p className="card-text ">Take the Quiz to test yourself!</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">5 Questions</li>
          <li className="list-group-item">Level : Pro</li>
        </ul>
        {/* <Link to="/rules"> */}
        <button
          className="btn btn-lg btn-info play-button"
          type="button"
          onClick={handleCurrentQuiz}
        >
          Play Now !
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default QuizTopicCard;
