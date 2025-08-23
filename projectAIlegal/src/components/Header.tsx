import React from 'react';
import { Scale, BookOpen, Wifi, WifiOff } from 'lucide-react';

interface HeaderProps {
  apiStatus?: 'connected' | 'disconnected' | 'error';
}

const Header: React.FC<HeaderProps> = ({ apiStatus = 'connected' }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-800">LegalAssist AI</h1>
        </div>
        
       
      </div>
    </header>
  );
};

export default Header;