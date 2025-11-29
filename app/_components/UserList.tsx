import { QuizResult } from "@/lib/supabase";
import { Check, X } from "lucide-react";
import React from "react";

interface UserListProps {
  title: string;
  users: QuizResult[];
  isPassed: boolean;
}
function UserList({ title, users, isPassed }: UserListProps) {
  const Icon = isPassed ? Check : X;
  const colorClass = isPassed ? "green" : "red";
  // Format date on client-side only to avoid hydration mismatch
  const formatDate = (dateString: string) => {
    if (typeof window === 'undefined') return dateString;
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6">
      <h2
        className={`text-2xl font-bold text-${colorClass}-600 flex -items-center gap-3`}
      >
        <Icon />
        {title}
      </h2>

      {users.length === 0 ? (
        <p>no Users {isPassed ? "passed" : "failed"} yet</p>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {users?.map((user, index) => (
            <div
              key={user.id || index}
              className={`border-2 p-4 mt-5  rouned-lg  ${
                isPassed
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              } `}
            >
              <div className="flex justify-between items-start mb-2">
                <strong className="text-black">{user?.full_name}</strong>

                <p className="flex items-center gap-3">
                  <span className="text-gray-500">{user.topic}</span>
                  <span
                    className={` font-bold ${
                      isPassed ? "text-green-600" : " text-red-600"
                    }`}
                  >
                    {user?.score} / {user?.total_questions} (
                    {Math.round((user?.score / user?.total_questions) * 100)}%){" "}
                  </span>
                  <span className="text-black">
                    {user?.created_at
                      ? formatDate(user?.created_at)
                      : ""}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
