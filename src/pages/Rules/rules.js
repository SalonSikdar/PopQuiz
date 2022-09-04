import React from "react";
import "./rules.css";

function Rules() {
  return (
    <div className="container">
      <h3 className="rule-title">Quiz Rules</h3>
      <div className="alert alert-dismissible alert-info">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Heads up!</strong> This{" "}
        <a href="/" className="alert-link">
          alert needs your attention
        </a>
        , but it's not super important.
        <ol>
          <li>
            In this round each team has its own quota of 4 questions and other
            questions passed to it from the previous team that did not answer.
          </li>
          <li>
            A team gets 30 seconds to answer the question intended for it, and
            is awarded 20 points for answering it.
          </li>
          <li>
            If the team, the question intended for gives a wrong answer, the
            quiz master will give the correct answer.
          </li>
          <li>
            If the team that the question intended for passes it. The next
            team/s get 15 seconds to answer it and is awarded 10 points for the
            right answer.
          </li>
          <li>The team members can discuss before giving the answer.</li>
          <li>
            If a team cannot answer a question they can pass it or after 30
            seconds it gets automatically passed to the next team.
          </li>
          <li>
            If a team is answering a question and the time passes, then the team
            gets to complete the answer and is awarded points for the right
            answer.
          </li>
          <li>
            There is no negative marking for wrong answer. No buzzer is used in
            this round
          </li>
        </ol>
      </div>
      <button type="button" className="btn btn-outline-success start-button">
        Start Quiz
      </button>
      <br />
      <br />
      <a href="/" className="alert-link">
        Take me back Home.
      </a>
    </div>
  );
}

export default Rules;
