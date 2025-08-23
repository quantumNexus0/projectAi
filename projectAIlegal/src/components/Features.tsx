import React from 'react';
import { MessageSquare, Upload, Search, FileText, Globe, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 feature-icon" />,
      title: "Ask Your Legal Query",
      description: "Get instant answers to your legal questions from our AI assistant."
    },
    {
      icon: <Zap className="h-8 w-8 feature-icon" />,
      title: "Be Specific",
      description: "The more details you provide, the more accurate our answers will be."
    },
    {
      icon: <Globe className="h-8 w-8 feature-icon" />,
      title: "Ask in Any Language",
      description: "Our AI understands and responds in multiple languages."
    },
    {
      icon: <Upload className="h-8 w-8 feature-icon" />,
      title: "Upload PDFs",
      description: "Upload legal documents for analysis and get insights."
    },
    {
      icon: <Search className="h-8 w-8 feature-icon" />,
      title: "Find Case Laws",
      description: "Search for relevant case laws to support your legal matters."
    },
    {
      icon: <FileText className="h-8 w-8 feature-icon" />,
      title: "Legal Drafting",
      description: "Generate legal documents and contracts based on your requirements."
    },
    {
      icon: <Globe className="h-8 w-8 feature-icon" />,
      title: "Web Search",
      description: "Search the web for legal information and resources."
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-blue-600 font-semibold text-lg">💯 It's Free!</p>
      </div>
    </div>
  );
};

export default Features;