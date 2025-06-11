import React from 'react';
import { Users, UserCheck, FileText, AlertCircle } from 'lucide-react';
import UsersList from './admin/UsersList';
import LawyersList from './admin/LawyersList';
import PendingApprovals from './admin/PendingApprovals';
import AdminStats from './admin/AdminStats';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users },
    { label: 'Active Lawyers', value: '56', icon: UserCheck },
    { label: 'Total Cases', value: '789', icon: FileText },
    { label: 'Pending Approvals', value: '12', icon: AlertCircle },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      
      <AdminStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <UsersList />
        <LawyersList />
      </div>

      <div className="mt-6">
        <PendingApprovals />
      </div>
    </div>
  );
};

export default AdminDashboard;