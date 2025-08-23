import React, { useState, useMemo } from 'react';
import LawyerCard from './LawyerCard';
import LawyerFilters from './LawyerFilters';
import type { Lawyer } from '../../types';

const lawyers: Lawyer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    specialization: 'Corporate Law',
    experience: 15,
    rating: 4.9,
    cases: 200,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    specialization: 'Civil Rights',
    experience: 8,
    rating: 4.8,
    cases: 150,
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    specialization: 'Family Law',
    experience: 10,
    rating: 4.7,
    cases: 180,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'David Kim',
    specialization: 'Criminal Law',
    experience: 12,
    rating: 4.6,
    cases: 220,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    specialization: 'Real Estate',
    experience: 6,
    rating: 4.5,
    cases: 90,
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'James Wilson',
    specialization: 'Intellectual Property',
    experience: 14,
    rating: 4.9,
    cases: 175,
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Maria Garcia',
    specialization: 'Immigration Law',
    experience: 9,
    rating: 4.7,
    cases: 245,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Robert Taylor',
    specialization: 'Environmental Law',
    experience: 18,
    rating: 4.8,
    cases: 190,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    name: 'Alexandra Lee',
    specialization: 'Employment Law',
    experience: 11,
    rating: 4.6,
    cases: 165,
    imageUrl: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    name: 'Thomas Martinez',
    specialization: 'Tax Law',
    experience: 13,
    rating: 4.7,
    cases: 210,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '11',
    name: 'Sophie Anderson',
    specialization: 'Healthcare Law',
    experience: 7,
    rating: 4.5,
    cases: 120,
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    name: 'Daniel Patel',
    specialization: 'International Law',
    experience: 16,
    rating: 4.9,
    cases: 280,
    imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '13',
    name: 'Rachel Cohen',
    specialization: 'Civil Litigation',
    experience: 10,
    rating: 4.8,
    cases: 195,
    imageUrl: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '14',
    name: 'William Chang',
    specialization: 'Banking Law',
    experience: 12,
    rating: 4.7,
    cases: 170,
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '15',
    name: 'Isabella Santos',
    specialization: 'Human Rights',
    experience: 8,
    rating: 4.6,
    cases: 140,
    imageUrl: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Lawyers = () => {
  const [filters, setFilters] = useState({
    specialization: '',
    experience: '',
    rating: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredLawyers = useMemo(() => {
    return lawyers.filter(lawyer => {
      if (filters.specialization && lawyer.specialization !== filters.specialization) {
        return false;
      }
      
      if (filters.experience) {
        const [min, max] = filters.experience.split('-').map(Number);
        if (max) {
          if (lawyer.experience < min || lawyer.experience > max) return false;
        } else {
          if (lawyer.experience < min) return false;
        }
      }
      
      if (filters.rating && lawyer.rating < Number(filters.rating)) {
        return false;
      }
      
      return true;
    });
  }, [filters, lawyers]);

  return (
    <section id="lawyers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Expert Lawyers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our team of experienced attorneys is here to help you
          </p>
        </div>

        <div className="mt-12">
          <LawyerFilters filters={filters} onFilterChange={handleFilterChange} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLawyers.length > 0 ? (
            filteredLawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No lawyers found matching your criteria. Please try different filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Lawyers;