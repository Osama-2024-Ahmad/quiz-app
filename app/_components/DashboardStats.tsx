import { BookOpen, Check } from "lucide-react";
import React from "react";

interface DashboardStatsProps {
  totalUsers: number;
  passedUsers: number;
  failedUsers: number;
}
function DashboardStats({
  totalUsers,
  passedUsers,
  failedUsers,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Card 1: Total Users */}

      <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:border-purple-500 transition mt-6">
        <div className="flex items-center gap-3">
          <div>
            <BookOpen
              width={50}
              height={50}
              className="bg-primary p-2 rounded-md "
              size={32}
            />
          </div>

          <div className="text-3xl font-bold text-gray-800">{totalUsers}</div>
          <div className="text-gray-600">Total Users</div>
        </div>
      </div>

      {/* Card 2: Passed Users */}

      <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:border-purple-500 transition mt-6">
        <div className="flex items-center gap-3">
          <div>
            <Check
              width={50}
              height={50}
              className="bg-primary p-2 rounded-md "
              size={32}
            />
          </div>

          <div className="text-3xl font-bold text-gray-800">{passedUsers}</div>
          <div className="text-gray-600"> passed Users</div>
        </div>
      </div>

      {/* Card 2: Passed Users */}

      <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:border-purple-500 transition mt-6">
        <div className="flex items-center gap-3">
          <div>
            <Check
              width={50}
              height={50}
              className="bg-primary p-2 rounded-md "
              size={32}
            />
          </div>

          <div className="text-3xl font-bold text-gray-800">{failedUsers}</div>
          <div className="text-gray-600"> not Passed Users</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
