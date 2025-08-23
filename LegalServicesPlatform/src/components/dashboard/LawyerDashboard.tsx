import React from 'react';
import { Calendar, Users, FileText, Clock } from 'lucide-react';
import LawyerProfile from './profile/LawyerProfile';
import CasesList from './cases/CasesList';
import AppointmentsList from './appointments/AppointmentsList';

const LawyerDashboard = () => {
  const stats = [
    { label: 'Active Cases', value: '12', icon: FileText },
    { label: 'Total Clients', value: '45', icon: Users },
    { label: 'Appointments', value: '8', icon: Calendar },
    { label: 'Hours Worked', value: '156', icon: Clock },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Lawyer Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <LawyerProfile />
        </div>
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <CasesList />
            <AppointmentsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;