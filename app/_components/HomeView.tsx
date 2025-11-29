import { BookOpen } from "lucide-react";
import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { Quiz } from "@/types/quiz";

// Type for the API response which includes questionCount but not the full questions array
interface QuizListItem {
  id: string;
  name: string;
  icon: string;
  questionCount: number;
}

interface HomeViewProps {
  onStartQuiz: (quizId: string, quiz: Quiz) => void;
  onViewDashboard: () => void;
}

function HomeView({ onStartQuiz, onViewDashboard }: HomeViewProps) {
  const [quizzes, setQuizzes] = useState<QuizListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client before rendering dynamic content
  useEffect(() => {
    setMounted(true);
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const res = await fetch("/api/quizzes");
      const data = await res.json();
      setQuizzes(data.quizzes);
    } catch (error) {
      console.error("Error fetching quizzes", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartQuiz = async (quizId: string) => {
    try {
      // Fetch the full quiz data when starting a quiz
      const res = await fetch(`/api/quizzes/${quizId}`);
      const data = await res.json();
      
      if (!data) return;
      
      // Create a quiz object that matches the Quiz type
      const quiz: Quiz = {
        id: quizId,
        name: data.name,
        icon: data.icon,
        questions: data.questions.map((q: any) => ({
          question: q.question,
          options: q.options,
          correct: 0 // Default value, will be updated when checking answers
        }))
      };
      
      onStartQuiz(quizId, quiz);
    } catch (error) {
      console.error("Error fetching quiz details", error);
    }
  };
  // Don't render dynamic content until component is mounted on client
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Web Development Quiz
            </h1>
            <p className="text-gray-500 text-xl">
              Test your knowledge and track your progress
            </p>
          </div>
          {/* Dashboard Button */}
          <div className="flex items-center justify-center mb-8">
            <button onClick={onViewDashboard} className="btn-primary">
              <BookOpen size={20} /> View Dashboard
            </button>
          </div>
          {/* Loading placeholder */}
          <div className="text-center py-12">
            <div className="animate-spin rounded-full w-16 h-16 border-t-4 border-b-4 border-purple-500 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Web Development Quiz
          </h1>
          <p className="text-gray-500 text-xl">
            Test your knowledge and track your progress
          </p>
        </div>

        {/* Dashboard Button */}

        <div className="flex items-center justify-center  mb-8">
          <button onClick={onViewDashboard} className="btn-primary ">
            {" "}
            <BookOpen size={20} /> View Dashboard
          </button>
        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full w-16 h-16 border-t-4 border-b-4 border-purple-500 mx-auto"></div>
          </div>
        )}

        {/* Quiz Cards */}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {quizzes?.map((quiz) => (
              <QuizCard
                key={quiz.id!}
                id={quiz.id!}
                name={quiz?.name}
                icon={quiz.icon}
                questionCount={quiz.questionCount}
                onStart={handleStartQuiz}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeView;
