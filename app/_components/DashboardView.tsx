import React, { useEffect, useState } from "react";
import { QuizResult } from "../../lib/supabase";
import { LayoutDashboard } from "lucide-react";
import DashboardStats from "./DashboardStats";
import UserList from "./UserList";
interface DashboardViewProps {
  onBackHome: () => void;
}

function DashboardView({ onBackHome }: DashboardViewProps) {
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Fetch results
  useEffect(() => {
    setMounted(true);
    fetchResults();
  }, []);

  const fetchResults = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/results");
      const data = await res.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  const passedUsers = results.filter((r) => r.passed);

  const failedUsers = results.filter((r) => !r.passed);

  // Don't render dynamic content until component is mounted on client
  if (!mounted) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <LayoutDashboard size={50} />
              <p className="text-5xl">Dashboard</p>
            </div>
            <button className="btn-primary" onClick={onBackHome}>
              Back To Home
            </button>
          </div>
          <div className="text-center py-12">
            <div className="animate-spin rounded-full w-16 h-16 border-t-4 border-b-4 border-purple-500 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LayoutDashboard size={50} />
            <p className=" text-5xl">Dashboard</p>
          </div>

          <button className="btn-primary" onClick={onBackHome}>
            Back To Home
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full w-16 h-16 border-t-4 border-b-4 border-purple-500 mx-auto"></div>
          </div>
        ) : (
          <>
            {/* Stats */}
            <DashboardStats
              totalUsers={results.length}
              passedUsers={passedUsers.length}
              failedUsers={failedUsers.length}
            />
            {/* User Lists */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <UserList
                title={"Passed Users"}
                users={passedUsers}
                isPassed={true}
              />

              <UserList
                title={" Not Passed Users"}
                users={failedUsers}
                isPassed={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardView;
