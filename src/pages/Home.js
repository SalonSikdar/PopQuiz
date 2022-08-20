import React, { Component } from "react";
import QuizTopicCard from "../components/QuizTopicCard/QuizTopicCard";

class Home extends Component {
  state = { genres: [] };
  render() {
    return (
      <div className="container">
        <h1>Home page</h1>
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-around">
              <QuizTopicCard />
              <QuizTopicCard />
            </div>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-around">
              <QuizTopicCard />
              <QuizTopicCard />
              <QuizTopicCard />
            </div>
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
