import React, { useState } from 'react';
import { X, Search, ExternalLink, Calendar, MapPin, Scale } from 'lucide-react';

interface FamousCase {
  id: string;
  title: string;
  year: number;
  court: string;
  jurisdiction: string;
  category: string;
  summary: string;
  significance: string;
  keyPrinciples: string[];
  citation: string;
  url?: string;
}

interface FamousCasesProps {
  isOpen: boolean;
  onClose: () => void;
}

const FamousCases: React.FC<FamousCasesProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const famousCases: FamousCase[] = [
    {
      id: '1',
      title: 'Brown v. Board of Education',
      year: 1954,
      court: 'U.S. Supreme Court',
      jurisdiction: 'United States',
      category: 'Civil Rights',
      summary: 'Landmark decision that declared racial segregation in public schools unconstitutional.',
      significance: 'Overturned the "separate but equal" doctrine and paved the way for the civil rights movement.',
      keyPrinciples: ['Equal Protection', 'Desegregation', 'Constitutional Rights'],
      citation: '347 U.S. 483 (1954)',
      url: 'https://example.com/brown-v-board'
    },
    {
      id: '2',
      title: 'Marbury v. Madison',
      year: 1803,
      court: 'U.S. Supreme Court',
      jurisdiction: 'United States',
      category: 'Constitutional Law',
      summary: 'Established the principle of judicial review in the United States.',
      significance: 'Gave the Supreme Court the power to declare laws unconstitutional.',
      keyPrinciples: ['Judicial Review', 'Separation of Powers', 'Constitutional Supremacy'],
      citation: '5 U.S. 137 (1803)',
      url: 'https://example.com/marbury-v-madison'
    },
    {
      id: '3',
      title: 'Roe v. Wade',
      year: 1973,
      court: 'U.S. Supreme Court',
      jurisdiction: 'United States',
      category: 'Privacy Rights',
      summary: 'Recognized a constitutional right to abortion under the right to privacy.',
      significance: 'Established framework for abortion rights that lasted nearly 50 years.',
      keyPrinciples: ['Privacy Rights', 'Due Process', 'Reproductive Rights'],
      citation: '410 U.S. 113 (1973)',
      url: 'https://example.com/roe-v-wade'
    },
    {
      id: '4',
      title: 'Miranda v. Arizona',
      year: 1966,
      court: 'U.S. Supreme Court',
      jurisdiction: 'United States',
      category: 'Criminal Law',
      summary: 'Required police to inform suspects of their rights before interrogation.',
      significance: 'Created the famous "Miranda rights" that protect against self-incrimination.',
      keyPrinciples: ['Fifth Amendment', 'Self-Incrimination', 'Due Process'],
      citation: '384 U.S. 436 (1966)',
      url: 'https://example.com/miranda-v-arizona'
    },
    {
      id: '5',
      title: 'Kesavananda Bharati v. State of Kerala',
      year: 1973,
      court: 'Supreme Court of India',
      jurisdiction: 'India',
      category: 'Constitutional Law',
      summary: 'Established the basic structure doctrine of the Indian Constitution.',
      significance: 'Limited Parliament\'s power to amend the Constitution\'s basic structure.',
      keyPrinciples: ['Basic Structure Doctrine', 'Constitutional Amendment', 'Judicial Review'],
      citation: '(1973) 4 SCC 225',
      url: 'https://example.com/kesavananda-bharati'
    },
    {
      id: '6',
      title: 'Donoghue v. Stevenson',
      year: 1932,
      court: 'House of Lords',
      jurisdiction: 'United Kingdom',
      category: 'Tort Law',
      summary: 'Established the modern law of negligence and the neighbor principle.',
      significance: 'Created the foundation for duty of care in tort law.',
      keyPrinciples: ['Negligence', 'Duty of Care', 'Neighbor Principle'],
      citation: '[1932] AC 562',
      url: 'https://example.com/donoghue-v-stevenson'
    }
  ];

  const categories = ['all', 'Civil Rights', 'Constitutional Law', 'Privacy Rights', 'Criminal Law', 'Tort Law'];

  const filteredCases = famousCases.filter(case_ => {
    const matchesSearch = case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.keyPrinciples.some(principle => 
                           principle.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === 'all' || case_.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Scale className="w-7 h-7 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Famous Legal Cases</h2>
              <p className="text-gray-600">Landmark decisions that shaped legal history</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Search and Filter */}
        <div className="p-6 border-b bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search cases by name, summary, or legal principles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cases List */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredCases.length === 0 ? (
            <div className="text-center py-12">
              <Scale className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No cases found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredCases.map((case_) => (
                <div key={case_.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{case_.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {case_.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {case_.jurisdiction}
                        </div>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {case_.category}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Court</h4>
                      <p className="text-gray-600">{case_.court}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Summary</h4>
                      <p className="text-gray-600 text-sm">{case_.summary}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Significance</h4>
                      <p className="text-gray-600 text-sm">{case_.significance}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Legal Principles</h4>
                      <div className="flex flex-wrap gap-2">
                        {case_.keyPrinciples.map((principle, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {principle}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        <strong>Citation:</strong> {case_.citation}
                      </div>
                      {case_.url && (
                        <a
                          href={case_.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Read More
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamousCases;