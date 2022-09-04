import React, { Component } from "react";
// import _ from "lodash";
import fetchData from "../../helpers/fetchData";
import QuizTopicCard from "../../components/QuizTopicCard/QuizTopicCard";
import "./Home.css";

class Home extends Component {
  state = { quiz: [], featured: [], kQuiz: [], international: [] };
  componentDidMount() {
    const quiz = fetchData.getQuizList();
    console.log("In component did mount" + JSON.stringify(quiz));
    let featured = [],
      kQuiz = [],
      international = [];
    for (let i = 0; i < 2; i++) {
      featured.push(<QuizTopicCard quiz={quiz[i]} />);
    }
    for (let i = 2; i < 5; i++) {
      kQuiz.push(<QuizTopicCard quiz={quiz[i]} />);
    }
    for (let i = 5; i < 8; i++) {
      international.push(<QuizTopicCard quiz={quiz[i]} />);
    }
    this.setState({ quiz, featured, kQuiz, international });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center home-header">
          <h2>Pop Quiz</h2>
        </div>
        <div
          className="d-flex flex-column bd-highlight mb-3"
          
        >
          <div className="text-side">
            <h4>Popular</h4>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-around" style={{"display":"flex"}}>
              {this.state.featured}
            </div>
          </div>
          <div className="text-side">
            <h4>K - Quiz</h4>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-around">
              {this.state.kQuiz}
            </div>
          </div>
          <div className="text-side">
            <h4>International</h4>
          </div>
          <div className="p-2 bd-highlight">
            <div className="d-flex justify-content-around">
              {this.state.international}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
