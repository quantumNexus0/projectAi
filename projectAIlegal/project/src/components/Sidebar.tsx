import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  History, 
  Info, 
  Scale, 
  ChevronRight,
  MessageSquare,
  BookOpen,
  Users
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onTemplateSelect: () => void;
  onFamousCasesSelect: () => void;
  conversationHistory: Array<{
    id: string;
    title: string;
    timestamp: Date;
  }>;
  onConversationSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  onTemplateSelect,
  onFamousCasesSelect,
  conversationHistory,
  onConversationSelect
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const menuItems = [
    {
      id: 'templates',
      title: 'Legal Templates',
      icon: <FileText className="w-5 h-5" />,
      description: 'Access legal document templates',
      action: onTemplateSelect
    },
    {
      id: 'history',
      title: 'Conversation History',
      icon: <History className="w-5 h-5" />,
      description: 'View past conversations',
      hasSubmenu: true
    },
    {
      id: 'famous-cases',
      title: 'Famous Cases',
      icon: <Scale className="w-5 h-5" />,
      description: 'Explore landmark legal cases',
      action: onFamousCasesSelect
    },
    {
      id: 'about',
      title: 'About Us',
      icon: <Info className="w-5 h-5" />,
      description: 'Learn about LegalAssist AI',
      hasSubmenu: true
    }
  ];

  const handleItemClick = (item: any) => {
    if (item.hasSubmenu) {
      setActiveSection(activeSection === item.id ? null : item.id);
    } else if (item.action) {
      item.action();
    }
  };

  const aboutContent = {
    mission: "To democratize legal assistance through AI technology",
    features: [
      "AI-powered legal consultation",
      "Document analysis and drafting",
      "Case law research",
      "Multi-language support"
    ],
    team: "Built by legal and technology experts"
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-80 lg:w-72
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">LegalAssist AI</h2>
          </div>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleItemClick(item)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600 group-hover:text-blue-700">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </div>
                  {item.hasSubmenu && (
                    <ChevronRight 
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        activeSection === item.id ? 'rotate-90' : ''
                      }`} 
                    />
                  )}
                </button>

                {/* Submenu Content */}
                {activeSection === item.id && (
                  <div className="ml-8 mt-2 space-y-2">
                    {item.id === 'history' && (
                      <div className="space-y-1">
                        {conversationHistory.length > 0 ? (
                          conversationHistory.slice(0, 10).map((conversation) => (
                            <button
                              key={conversation.id}
                              onClick={() => onConversationSelect(conversation.id)}
                              className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm"
                            >
                              <div className="flex items-center gap-2">
                                <MessageSquare className="w-3 h-3 text-gray-400" />
                                <div>
                                  <div className="font-medium text-gray-700 truncate">
                                    {conversation.title}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {conversation.timestamp.toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                            </button>
                          ))
                        ) : (
                          <div className="text-sm text-gray-500 p-2">
                            No conversation history yet
                          </div>
                        )}
                      </div>
                    )}

                    {item.id === 'about' && (
                      <div className="space-y-3 p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">Our Mission</h4>
                          <p className="text-sm text-gray-600">{aboutContent.mission}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {aboutContent.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">Team</h4>
                          <p className="text-sm text-gray-600 flex items-center gap-2">
                            <Users className="w-3 h-3" />
                            {aboutContent.team}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-gray-200">
                          <p className="text-xs text-gray-500">
                            © 2024 LegalAssist AI. All rights reserved.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Need help?</div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;