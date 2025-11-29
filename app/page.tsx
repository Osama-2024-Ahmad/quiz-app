"use client";
import { useState } from "react";
import HomeView from "./_components/HomeView";
import NameInputView from "./_components/NameInputView";
import QuizView from "./_components/QuizView";
import ResultDisplay from "./_components/ResultDisplay";
import DashboardView from "./_components/DashboardView";
import { Quiz, QuizResult } from "@/types/quiz";

export default function Home() {
  type View = "home" | "nameInput" | "quiz" | "result" | "dashboard";

  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [userName, setUserName] = useState("");
  const [result, setResult] = useState<QuizResult | null>(null);
  const [view, setView] = useState<View>("home");

  const handleStartQuiz = (quizId: string, quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setView("nameInput");
  };

  const handleNameSubmit = (name: string, quizData: Quiz) => {
    setUserName(name);
    setSelectedQuiz({ ...selectedQuiz, ...quizData });
    setView("quiz");
  };

  const handleCancelNameInput = () => {
    setSelectedQuiz(null);
    setView("home");
  };

  const handleReset = () => {
    setView("home");
    setSelectedQuiz(null);
    setUserName("");
    setResult(null);
  };

  const handleQuizComplete = (resultData: QuizResult) => {
    setResult(resultData);
    setView("result");
  };

  // 🏠 HOME VIEW
  if (view === "home") {
    return (
      <HomeView
        onStartQuiz={handleStartQuiz}
        onViewDashboard={() => setView("dashboard")}
      />
    );
  }

  // 🧍‍♂️ NAME INPUT VIEW (يتطلب selectedQuiz)
  if (view === "nameInput" && selectedQuiz) {
    return (
      <NameInputView
        quiz={selectedQuiz}
        onCancel={handleCancelNameInput}
        onSubmit={handleNameSubmit}
      />
    );
  }

  // 🧩 QUIZ VIEW (يتطلب selectedQuiz)
  if (view === "quiz" && selectedQuiz) {
    return (
      <QuizView
        quiz={selectedQuiz}
        userName={userName}
        onExit={handleReset}
        onComplete={handleQuizComplete}
      />
    );
  }

  // 🏁 RESULT VIEW (يتطلب result)
  if (view === "result" && result) {
    return (
      <ResultDisplay
        userName={userName}
        score={result.score}
        passed={result.passed}
        total={result.totalQuestions}
        onBackHome={handleReset}
        onViewDashboard={() => setView("dashboard")}
      />
    );
  }

  // 📊 DASHBOARD VIEW
  if (view === "dashboard") {
    return <DashboardView onBackHome={handleReset} />;
  }

  return null;
}
