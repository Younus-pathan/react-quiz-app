import React, { useState } from "react";
import Option from "./Option";
import CodeSnippet from "./Codesnippet";

const Question = ({ questionData, handleSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option) => {
    if (questionData.type === "single" || questionData.type === "trueFalse") {
      setSelectedOptions([option]); // Select only one option
    } else {
      setSelectedOptions((prev) =>
        prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
      );
    }
  };

  return (
    <div>
      <h3>{questionData.question}</h3>
      {questionData.codeSnippet && <CodeSnippet code={questionData.codeSnippet} />}
      <div className="space-y-2">
        {questionData.options.map((option, index) => (
          <Option key={index} option={option} selectedOptions={selectedOptions} handleSelect={handleSelect} />
        ))}
      </div>
      <button
        onClick={() => handleSubmit(selectedOptions)}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default Question;