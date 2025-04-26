import React, { useState } from "react";

import QuizSummary from "./components/results/QuizSummary";
import questions from "./data/questions.json";
import Question from "./components/questions/Question";
import './index.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleSubmit = (selectedOptions) => {
    const correctAnswers = questions[currentIndex].correct;

    if (
      selectedOptions.length === correctAnswers.length &&
      selectedOptions.every((option) => correctAnswers.includes(option))
    ) {
      setScore(score + 1);
    }

    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      {currentIndex < questions.length ? (
        <Question questionData={questions[currentIndex]} handleSubmit={handleSubmit} />
      ) : (
        <QuizSummary score={score} total={questions.length} />
      )}
    </div>
  );
};

export default App;