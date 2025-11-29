import { Quiz } from "@/types/quiz";
import React, { useState } from "react";

interface NameInputViewProps {
  quiz: Quiz;
  onCancel: () => void;
  onSubmit: (name: string, quizData: Quiz) => void;
}

function NameInputView({ quiz, onCancel, onSubmit }: NameInputViewProps) {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!userName.trim()) return;

    setLoading(true);
    try {
      // Fetch full quiz data with questions
      const res = await fetch(`/api/quizzes/${quiz.id}`);

      const quizData = await res.json();

      onSubmit(userName.trim(), quizData);
    } catch (error) {
      console.error("Error loading quiz", error);
      alert("Failed to load quiz. Please try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white flex items-center justify-center bg-primary p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md   p-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{quiz?.icon}</div>
          <h2 className="txt-primary text-3xl mt-4">{quiz?.name}</h2>

          <p className="my-3 text-black">Enter your name to begin</p>

          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your Name"
            className="w-full px-4 py-3 border-2 border-gray-300 text-black"
          />
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              disabled={loading}
              className="btn-primary"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              disabled={!userName.trim() || loading}
              className="btn-primary"
              onClick={handleSubmit}
            >
              start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameInputView;
