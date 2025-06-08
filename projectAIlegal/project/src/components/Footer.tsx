import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} LegalAssist AI. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-300 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-slate-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-300 hover:text-white text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;