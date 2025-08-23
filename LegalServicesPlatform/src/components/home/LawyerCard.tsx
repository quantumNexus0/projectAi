import React from 'react';
import { Star, Briefcase } from 'lucide-react';
import type { Lawyer } from '../../types';

interface LawyerCardProps {
  lawyer: Lawyer;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="relative h-48">
        <img
          className="w-full h-full object-cover"
          src={lawyer.imageUrl}
          alt={lawyer.name}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{lawyer.name}</h3>
        <p className="text-sm text-blue-600 mt-1">{lawyer.specialization}</p>
        
        <div className="mt-4 flex items-center">
          <Star className="h-5 w-5 text-yellow-400" />
          <span className="ml-2 text-gray-600">{lawyer.rating.toFixed(1)}</span>
        </div>
        
        <div className="mt-2 flex items-center">
          <Briefcase className="h-5 w-5 text-gray-400" />
          <span className="ml-2 text-gray-600">{lawyer.cases}+ Cases</span>
        </div>
        
        <div className="mt-4">
          <span className="text-sm text-gray-500">
            {lawyer.experience} years of experience
          </span>
        </div>
        
        <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default LawyerCard;