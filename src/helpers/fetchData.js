// import _ from "lodash";

const getQuizList = () => {
  let quizList = [
    {
      quizId: "23uhnyh",
      title: "Harry Potter",
      tagLine: "It does not do to dwell on dreams and forget to live.",
      image: "/jarry-potter.jpg",
      noOfQuestions: 10,
      level: "Pro",
    },
    {
      quizId: "56tghgh",
      title: "Money Heist",
      tagLine: "Death Can Be The Greatest Opportunity Of Your Life.",
      image: "/money.jpg",
      noOfQuestions: 12,
      level: "Intermediate",
    },
    {
      quizId: "67ghjkj",
      title: "Tomorrow",
      tagLine:
        "The choice you made in your youth was honorable. You have lost so much.",
      image: "/tomorrow.jpg",
      noOfQuestions: 11,
      level: "Beginner",
    },
    {
      quizId: "98ghkut",
      title: "All of Us are Dead",
      tagLine: "If it Happens again, bite me, not yourself. ",
      image: "/dead.jpeg",
      noOfQuestions: 21,
      level: "Pro",
    },
    {
      quizId: "54erdfv",
      title: "Alchemy Of Souls",
      tagLine:
        "First you awaken to the darkness that is in you, then you learn to accept it",
      image: "/alchemy.jpg",
      noOfQuestions: 4,
      level: "Intermediate",
    },
    {
      quizId: "09ujhyg",
      title: "Stranger Things",
      tagLine: "Mornings are for coffee and contemplation.",
      image: "/stranger.jpeg",
      noOfQuestions: 6,
      level: "Intermediate",
    },
    {
      quizId: "37ytrfd",
      title: "F.R.I.E.N.D.S",
      tagLine: "Pivot!",
      image: "/friends.jpg",
      noOfQuestions: 13,
      level: "Beginner",
    },
    {
      quizId: "82yhbdf",
      title: "Big Bang Theory",
      tagLine: "We’re here to see Koothrappali, not kill Batman.",
      image: "/bigbangtheory.jpg",
      noOfQuestions: 15,
      level: "Beginner",
    },
  ];

  return quizList;
};

const getQuestion = (quizId, qNo) => {
  console.log("returning question" + quizId);
  console.log("returning question no" + qNo);
  let questionsMap = {
    "23uhnyh": [
      {
        q: "What is this?",
        a: "this is a",
        b: "this is b",
        c: "this is c",
        d: "this is d",
        correct: "c",
      },
    ],
    "56tghgh": [],
    "67ghjkj": [],
    "98ghkut": [],
    "54erdfv": [],
    "09ujhyg": [],
    "37ytrfd": [],
    "82yhbdf": [],
  };
  let questions = questionsMap[quizId];
  console.log("FOund questions" + JSON.stringify(questions));
  return questions[parseInt(qNo)];
};

export default {
  getQuizList,
  getQuestion,
};
