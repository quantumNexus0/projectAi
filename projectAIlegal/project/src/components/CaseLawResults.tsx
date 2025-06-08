import React, { useState } from 'react';
import { ExternalLink, BookOpen, Search, Filter, X, XCircle } from 'lucide-react';
import { LegalCase } from '../types';

interface CaseLawResultsProps {
  cases: LegalCase[];
  onClose: () => void;
}

const CaseLawResults: React.FC<CaseLawResultsProps> = ({ cases = [], onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'title'>('relevance');

  // Temporarily commented out Indian Kanoon API integration
  // Will be implemented in future
  /*
  const fetchCasesFromAPI = async () => {
    try {
      const response = await fetch('https://api.indiankanoon.org/search/', {
        method: 'POST',
        headers: {
          'Authorization': '4f2ec4fabe19f77df24f0fecd357620c9079ad49',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: searchTerm,
          filter: {
            sortBy: sortBy
          }
        })
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cases:', error);
      return [];
    }
  };
  */

  if (!cases || cases.length === 0) return null;

  const filteredCases = cases.filter(caseItem => 
    caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseItem.citation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caseItem.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCases = [...filteredCases].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'date') {
      const yearA = parseInt(a.citation.match(/\((\d{4})\)/)?.[1] || '0');
      const yearB = parseInt(b.citation.match(/\((\d{4})\)/)?.[1] || '0');
      return yearB - yearA;
    }
    return 0;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Case Law Results</h3>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-red-500 transition-transform hover:rotate-90">
            <XCircle className="h-6 w-6" />
          </button>
        </div>

        {/* Search & Filter */}
        <div className="p-4 border-b">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'relevance' | 'date' | 'title')}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white min-w-[200px]"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {sortedCases.length === 0 ? (
            <div className="text-center py-4 text-slate-500">
              No cases found matching your search criteria.
            </div>
          ) : (
            <div className="space-y-4">
              {sortedCases.map((caseItem) => (
                <div key={caseItem.id} className="border-b pb-3 last:border-b-0 hover:bg-blue-50 transition rounded-md p-2">
                  <h4 className="font-medium text-blue-800">{caseItem.title}</h4>
                  <p className="text-sm text-slate-600 my-1">{caseItem.citation}</p>
                  <p className="text-sm mb-2">{caseItem.summary}</p>
                  <a 
                    href={caseItem.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                  >
                    View Full Case
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseLawResults;