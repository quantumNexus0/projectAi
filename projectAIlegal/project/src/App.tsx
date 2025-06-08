import React from 'react';
import { AIChat } from './components/AIChat';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 overflow-y-auto max-h-[calc(100vh-100px)] w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8 text-center md:text-left">AI Legal Assistant</h1>
        <div className="overflow-y-auto p-2 border rounded-lg shadow-inner w-full h-full max-w-none mx-auto">
          <AIChat />
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
