import React from "react";

const QuizSummary = ({ score, total }) => {
  return (
    <div>
      <h2 className="mx-auto flex max-w-sm text-4xl font-bold">Quiz Summary</h2>
      <p className="mx-auto flex max-w-sm font-semibold p-4" >Your Score: {score} / {total}</p>
    </div>
  );
};

export default QuizSummary;