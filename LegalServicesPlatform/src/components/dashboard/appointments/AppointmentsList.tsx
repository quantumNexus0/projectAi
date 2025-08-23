import React from 'react';
import { Clock, Calendar, User } from 'lucide-react';

const AppointmentsList = () => {
  const appointments = [
    {
      id: 1,
      title: 'Initial Consultation',
      date: '2024-03-15',
      time: '10:00 AM',
      with: 'John Smith',
      type: 'Video Call',
      status: 'Confirmed',
    },
    {
      id: 2,
      title: 'Case Review',
      date: '2024-03-18',
      time: '2:30 PM',
      with: 'Sarah Johnson',
      type: 'In Person',
      status: 'Pending',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border rounded-lg p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{appointment.title}</h3>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {appointment.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {appointment.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    With: {appointment.with}
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{appointment.type}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                appointment.status === 'Confirmed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {appointment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsList;