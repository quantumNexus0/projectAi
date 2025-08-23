import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface AdminStatsProps {
  stats: StatItem[];
}

const AdminStats: React.FC<AdminStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Icon className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminStats;