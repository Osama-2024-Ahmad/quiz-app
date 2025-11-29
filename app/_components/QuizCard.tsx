import React from "react";

interface QuizCardProps {
  id: string;
  name: string;
  icon: string;
  questionCount: number;
  onStart: (id: string) => void;
}

function QuizCard({ id, name, icon, questionCount, onStart }: QuizCardProps) {
  return (
    <div
      className="bg-white border-2 border-gray-200 rounded-2xl  p-6 shadow-lg"
      onClick={() => onStart(id)}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl mb-6">{icon}</div>

        <h2 className="text-2xl mb-4 font-bold text-black">{name}</h2>

        <p className="text-gray-500">{questionCount} Questions</p>

        <button className="btn-primary mt-5">Start Quiz</button>
      </div>
    </div>
  );
}

export default QuizCard;
