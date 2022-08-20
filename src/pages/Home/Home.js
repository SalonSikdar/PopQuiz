import React, { Component } from "react";
import QuizTopicCard from "../../components/QuizTopicCard/QuizTopicCard";
import "./Home.css";

class Home extends Component {
  state = { genres: [] };
  render() {
    return (
      <div className="container">
        <div className="text-center home-header">
          <h2>Pop Quiz</h2>
        </div>
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="text-side">
            <h4>Popular</h4>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-around">
              <QuizTopicCard />
              <QuizTopicCard />
            </div>
          </div>
          <div className="text-side">
            <h4>K - Quiz</h4>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-around">
              <QuizTopicCard />
              <QuizTopicCard />
              <QuizTopicCard />
            </div>
          </div>
          <div className="text-side">
            <h4>International</h4>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-around">
              <QuizTopicCard />
              <QuizTopicCard />
              <QuizTopicCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
