import React, { useState } from 'react';
import { XCircle, Search, Filter, BookOpen } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';

// Template Interface
interface LegalTemplate {
  id: string;
  title: string;
  description: string;
  content: string;
}

// LegalDraftingPanel Props
interface LegalDraftingPanelProps {
  templates: LegalTemplate[];
  onClose: () => void;
  onSelectTemplate: (template: LegalTemplate) => void;
}

// Collapsible Section Component
const CollapsibleSection: React.FC<{ title: string; children: string }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer font-semibold text-blue-600 p-2 hover:text-blue-800"
      >
        {title} {isOpen ? '▲' : '▼'}
      </div>
      {isOpen && <div className="ml-4 mt-2">{children}</div>}
    </div>
  );
};

// Function to format template content as text (removes HTML tags)
const formatContent = (content: string) => {
  return content.replace(/<\/?[^>]+(>|$)/g, "");  // Remove HTML tags
};

// Legal Drafting Panel Component
const LegalDraftingPanel: React.FC<LegalDraftingPanelProps> = ({
  templates = [],
  onClose,
  onSelectTemplate,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<LegalTemplate | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // PDF Download
  const handleDownloadPDF = () => {
    if (selectedTemplate) {
      const doc = new jsPDF();
      const content = formatContent(selectedTemplate.content);
      let y = 10; // starting y position for text
      const margin = 10;
      const pageHeight = doc.internal.pageSize.height;

      // Break content into chunks that fit on the page
      const splitText = doc.splitTextToSize(content, 180); // 180 is the width of the text
      for (let i = 0; i < splitText.length; i++) {
        if (y + 10 > pageHeight) {
          doc.addPage(); // Add a new page if we reach the end
          y = 10; // reset y position
        }
        doc.text(splitText[i], margin, y);
        y += 10;
      }

      doc.save(`${selectedTemplate.title}.pdf`);
    }
  };

  const categories = [
    'all',
    'business',
    'employment',
    'real estate',
    'privacy',
    'intellectual property',
    'corporate',
    'contracts',
    'compliance',
    'general',
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === 'all' || template.description.toLowerCase().includes(categoryFilter);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Legal Document Templates</h3>
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
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white min-w-[200px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex">
          {/* Left: Template List */}
          <div className="w-1/3 border-r overflow-y-auto p-4">
            {filteredTemplates.length === 0 ? (
              <div className="text-center py-4 text-slate-500">
                No templates found matching your search criteria.
              </div>
            ) : (
              <div className="space-y-2">
                {filteredTemplates.map((template) => (
                  <div
                    key={template.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      selectedTemplate?.id === template.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => {
                      setSelectedTemplate(template);
                      onSelectTemplate(template);
                    }}
                  >
                    <h4 className="font-medium">{template.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{template.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Template Content */}
          <div className="w-2/3 overflow-y-auto p-4">
            {selectedTemplate ? (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium">{selectedTemplate.title}</h4>
                  <div className="flex gap-2">
                    <button
                      onClick={handleDownloadPDF}
                      className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap break-words">{formatContent(selectedTemplate.content)}</pre>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-500">
                Select a template to view its content
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDraftingPanel;
