import { Check, X } from "lucide-react";
import React from "react";

interface ResultDisplayProps {
  userName: string;
  score: number;
  total: number;
  passed: boolean;
  onBackHome: () => void;
  onViewDashboard: () => void;
}
function ResultDisplay({
  userName,
  score,
  total,
  passed,
  onBackHome,
  onViewDashboard,
}: ResultDisplayProps) {
  const percentage = (score / total) * 100;
  return (
    <div className="min-h-screen bg-white flex items-center justify-center bg-primary p-4">
      <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="text-3xl font-bold text-gray-800 mb-2">
          <p>{passed ? "Congratulations" : "Keep Learning"}</p>
          <p className="text-xl text-gray-600 my-3.5">{userName}</p>

          {/* Score Card */}

          <div className="bg-purple-100 rounded-xl mb-6 p-3">
            <div className="text-5xl txt-primary">
              {score} / {total}
            </div>

            <div className="text-lg text-gray-700">
              {percentage.toFixed(0)}% Correct
            </div>

            <div className="flex items-center justify-center gap-2 my-3">
              {passed ? (
                <>
                  <Check className="text-green-600" size={24} />
                  <span className="text-green-600 text-xl ">Passed</span>
                </>
              ) : (
                <>
                  <X className="text-red-600" size={24} />
                  <span className="text-red-600 text-xl ">Not Passed</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-center">
          <button className="btn-primary" onClick={onBackHome}>
            {" "}
            Back to Home
          </button>

          <button className="btn-primary" onClick={onViewDashboard}>
            {" "}
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultDisplay;
