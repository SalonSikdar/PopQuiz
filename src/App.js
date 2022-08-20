import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import QuizQuestion from "./pages/QuizQuestion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" page={<Home />}>
          <Route index element={<Home />} />
          <Route path="quiz-questions" element={<QuizQuestion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
