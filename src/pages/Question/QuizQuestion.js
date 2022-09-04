import React, { useEffect } from "react";
import { useState } from "react";
import fetchData from "../../helpers/fetchData";
import "./question.css";

const QuizQuestion = () => {
  let [curQuiz, setCurQuiz] = useState(
    JSON.parse(localStorage.getItem("curQuiz"))
  );
  let [curQuestion, setCurQuestion] = useState(
    fetchData.getQuestion(curQuiz.quizId, localStorage.getItem("curQuestion"))
  );

  return (
    <div className="container">
      <h2 className="quiz-question-title">{curQuiz.title}</h2>
      <h4 className="quiz-question-title">
        Q{localStorage.getItem("curQuestion") + ". " + curQuestion.q}
      </h4>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          {curQuestion.a}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          {curQuestion.b}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          {curQuestion.c}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          {curQuestion.d}
        </a>
      </div>
      <div className="d-flex justify-content-between quiz-question-buttons">
        <button type="button" className="btn btn-danger">
          See Previous
        </button>
        <button type="button" className="btn btn-info">
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
