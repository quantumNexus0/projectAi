import React from 'react';
import { Scale, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">LegalPro</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional legal services you can trust. We're here to help you navigate through your legal challenges.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500">Services</a></li>
              <li><a href="#lawyers" className="text-gray-400 hover:text-blue-500">Our Lawyers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Corporate Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Civil Litigation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Family Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500">Criminal Defense</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} LegalPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;