import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import QuestionDisplay from "./QuestionDisplay";
import { Quiz, QuizResult } from "@/types/quiz";

interface QuizViewProps {
  quiz: Quiz;
  userName: string;
  onExit: () => void;

  onComplete: (result: QuizResult) => void;
}
function QuizView({ quiz, userName, onExit, onComplete }: QuizViewProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [fullQuiz, setFullQuiz] = useState<Quiz>(quiz);
  const [answers, setAnswers] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch the full quiz data with correct answers
  useEffect(() => {
    const fetchFullQuiz = async () => {
      try {
        const response = await fetch(`/api/quizzes/full/${quiz.name.toLowerCase()}`);
        if (response.ok) {
          const data = await response.json();
          setFullQuiz(data);
        }
      } catch (error) {
        console.error("Error fetching full quiz:", error);
      }
    };

    fetchFullQuiz();
  }, [quiz.name]);

  const handleNext = async () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < fullQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      await submitQuiz(newAnswers);
    }
  };

  const submitQuiz = async (finalAnswers: number[]) => {
    setLoading(true);
    try {
      const submitData = {
        fullName: userName,
        topic: fullQuiz.name.toLowerCase(),
        answers: finalAnswers,
      };
      
      console.log("Submitting quiz with data:", submitData);
      
      const res = await fetch("/api/quizzes/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit");
      }

      const result = await res.json();
      
      // Check if there's a warning but still show results
      if (result.warning) {
        console.warn("Warning from server:", result.warning);
        alert(`Warning: ${result.warning}`);
      }
      
      onComplete(result);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to submit quiz. Please try again.";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const question = fullQuiz.questions[currentQuestion];

  const isLastQuestion = currentQuestion === fullQuiz.questions.length - 1;
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 bg-primary">
      <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header */}

        <div className="my-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {fullQuiz?.icon} {fullQuiz?.name} Quiz
            </h2>

            <span className="text-gray-600 font-semibold">
              {currentQuestion + 1} / {fullQuiz?.questions?.length}
            </span>
          </div>
          <ProgressBar
            total={fullQuiz.questions.length}
            current={currentQuestion + 1}
          />
        </div>
        <QuestionDisplay
          question={question.question}
          options={question.options}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
        />

        <div className="flex items-center justify-center gap-3">
          <button className="btn-primary" onClick={onExit}>
            Exit
          </button>
          <button
            className="btn-primary"
            disabled={selectedAnswer === null || loading}
            onClick={handleNext}
          >
            {loading
              ? "Submitting..."
              : isLastQuestion
              ? "Finish quiz"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizView;
