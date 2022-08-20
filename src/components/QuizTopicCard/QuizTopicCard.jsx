import React from "react";

import "./QuizTopicCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";

function QuizTopicCard() {
  return (
    <div className="space-around">
      <div className="card mb-3 purple-shadow">
        <h3 className="card-header">Harry Potter</h3>
        <div className="card-body">
          <h5 className="card-title">
            “It does not do to dwell on dreams and forget to live.”
          </h5>
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="d-block user-select-none"
          width="100%"
          height="200"
          aria-label="Placeholder: Image cap"
          focusable="false"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 318 180"
          style="font-size:1.125rem;text-anchor:middle"
        >
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            Image cap
          </text>
        </svg> */}
        <div className="card-body">
          <img src="/jarry-potter.jpg" alt="quiz cover" />
        </div>
        <div className="card-body quiz-prompt">
          <p className="card-text ">Take the Quiz to test yourself!</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">5 Questions</li>
          <li className="list-group-item">Level : Pro</li>
        </ul>
        <button class="btn btn-lg btn-info play-button" type="button">
          Play Now !
        </button>
      </div>
    </div>
  );
}

export default QuizTopicCard;
