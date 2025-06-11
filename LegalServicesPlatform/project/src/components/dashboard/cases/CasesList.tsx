import React from 'react';
import { Calendar, FileText } from 'lucide-react';

const CasesList = () => {
  const cases = [
    {
      id: 1,
      title: 'Property Dispute',
      type: 'Civil Case',
      status: 'Active',
      nextHearing: '2024-03-20',
      lawyer: 'John Smith',
    },
    {
      id: 2,
      title: 'Contract Review',
      type: 'Corporate',
      status: 'Pending',
      nextHearing: '2024-03-25',
      lawyer: 'Sarah Johnson',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Cases</h2>
      <div className="space-y-4">
        {cases.map((case_) => (
          <div key={case_.id} className="border rounded-lg p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{case_.title}</h3>
                <p className="text-sm text-gray-500">{case_.type}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Next Hearing: {case_.nextHearing}
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  <FileText className="h-4 w-4 inline mr-1" />
                  Lawyer: {case_.lawyer}
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                case_.status === 'Active' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {case_.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasesList;