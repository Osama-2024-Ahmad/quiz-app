import React from "react";

interface QuestionDisplayProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
}
function QuestionDisplay({
  question,
  options,
  selectedAnswer,
  onSelect,
}: QuestionDisplayProps) {
  return (
    <div className="mb-8">
      {/* Question Text */}

      <h2 className="text-xl font-semibold text-gray-800 mb-6">{question}</h2>

      {/* Answer Options */}

      <div className="space-y-3">
        {options?.map((option, index) => (
          <button
            key={index}
            className={` cursor-pointer w-full p-4 text-left rounded-lg border-2 ${
              selectedAnswer === index
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-purple-400"
            } `}
            onClick={() => onSelect(index)}
          >
            <span className="text-black">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionDisplay;
