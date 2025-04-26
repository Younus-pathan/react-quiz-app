import React from "react";

const Option = ({ option, selectedOptions, handleSelect }) => {
  const isSelected = selectedOptions.includes(option);

  return (
    <button
      className={`block w-full text-left px-4 py-2 rounded-md transition ${
        isSelected ? "bg-green-500 text-white" : "bg-blue-500 text-white"
      }`}
      onClick={() => handleSelect(option)}
    >
      {option}
    </button>
  );
};

export default Option;