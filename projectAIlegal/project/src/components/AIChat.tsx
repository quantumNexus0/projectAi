import React, { useState, useEffect, useRef } from 'react';
import { Send, AlertCircle, Zap, FileText, BookOpen, FilePlus, Mic, } from 'lucide-react';
import { geminiModel, analyzeLegalDocument } from '../lib/gemini';
import CaseLawResults from './CaseLawResults';
// import FileUploadPreview from './FileUploadPreview';
import LegalDraftingPanel from './LegalDraftingPanel';
import WebSearchResults from './WebSearchResults';
import { legalTemplateButton } from '../data/mockData';
import { Message, UploadedFile } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface ChatMessage extends Message {
  role: 'user' | 'assistant';
}

export function AIChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [caseData, setCaseData] = useState<any[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [showLegalTemplate, setShowLegalTemplate] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target.files?.[0];
    if (fileInput) {
      try {
        const reader = new FileReader();
        
        reader.onload = async () => {
          const content = reader.result as string;
          const uploadedFile: UploadedFile = {
            id: uuidv4(),
            name: fileInput.name,
            content,
            type: fileInput.type
          };
          setFile(uploadedFile);
          setIsLoading(true);
          setError(null);

          const analysis = await analyzeLegalDocument(content);
          
          setMessages(prev => [...prev, 
            { 
              id: uuidv4(),
              role: 'user',
              content: `Analyzing document: ${fileInput.name}`,
              sender: 'user',
              timestamp: new Date()
            },
            {
              id: uuidv4(),
              role: 'assistant',
              content: analysis,
              sender: 'bot',
              timestamp: new Date()
            }
          ]);
          setIsLoading(false);
        };

        reader.onerror = () => {
          setError('Failed to read file. Please try again.');
          setIsLoading(false);
        };

        reader.readAsText(fileInput);
      } catch (error) {
        console.error('Error reading file:', error);
        setError('Failed to read file. Please try again.');
        setIsLoading(false);
      }
    }
  };

  const handleAnalysis = async (analysis: string) => {
    setMessages(prev => [...prev,
      {
        id: uuidv4(),
        role: 'assistant',
        content: analysis,
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error('Voice recognition error:', event.error);
      setError('Voice recognition error. Please try again.');
      setIsListening(false);
    };
  };

  const handleFetchCases = async () => {
    try {
      setIsLoading(true);
      const cases = [
        { id: '1', title: 'Kesavananda Bharati v. State of Kerala', citation: '(1973) 4 SCC 225', summary: 'Basic structure doctrine case', url: 'https://example.com/case1' },
        { id: '2', title: 'Maneka Gandhi v. Union of India', citation: '(1978) 1 SCC 248', summary: 'Personal liberty and due process', url: 'https://example.com/case2' },
        { id: '3', title: 'K.M. Nanavati v. State of Maharashtra', citation: 'AIR 1962 SC 605', summary: 'Criminal trial and jury system in India', url: 'https://example.com/case3' },
        { id: '4', title: 'Indira Nehru Gandhi v. Raj Narain', citation: '(1975) Supp SCC 1', summary: 'Election dispute and judicial review', url: 'https://example.com/case4' },
        { id: '5', title: 'Vishaka v. State of Rajasthan', citation: '(1997) 6 SCC 241', summary: 'Sexual harassment at workplace guidelines', url: 'https://example.com/case5' },
        { id: '6', title: 'Shayara Bano v. Union of India', citation: '(2017) 9 SCC 1', summary: 'Triple talaq declared unconstitutional', url: 'https://example.com/case6' },
        { id: '7', title: 'Navtej Singh Johar v. Union of India', citation: '(2018) 10 SCC 1', summary: 'Decriminalization of homosexuality (Section 377)', url: 'https://example.com/case7' },
        { id: '8', title: 'Indian Young Lawyers Association v. State of Kerala', citation: '(2019) 11 SCC 1', summary: 'Sabarimala temple entry for women', url: 'https://example.com/case8' },
        { id: '9', title: 'Justice K.S. Puttaswamy v. Union of India', citation: '(2017) 10 SCC 1', summary: 'Right to privacy as a fundamental right', url: 'https://example.com/case9' },
        { id: '10', title: 'MC Mehta v. Union of India', citation: '(1987) 1 SCC 395', summary: 'Environmental protection and absolute liability', url: 'https://example.com/case10' },
        { id: '11', title: 'Olga Tellis v. Bombay Municipal Corporation', citation: '(1985) 3 SCC 545', summary: 'Right to livelihood under Article 21', url: 'https://example.com/case11' },
        { id: '12', title: 'S.R. Bommai v. Union of India', citation: '(1994) 3 SCC 1', summary: 'Federalism and President\'s Rule', url: 'https://example.com/case12' },
        { id: '13', title: 'Golaknath v. State of Punjab', citation: '(1967) 2 SCR 762', summary: 'Parliament cannot amend fundamental rights', url: 'https://example.com/case13' },
        { id: '14', title: 'Mohd. Ahmed Khan v. Shah Bano Begum', citation: '(1985) 2 SCC 556', summary: 'Maintenance rights for Muslim women', url: 'https://example.com/case14' },
        { id: '15', title: 'Bachan Singh v. State of Punjab', citation: '(1980) 2 SCC 684', summary: 'Doctrine of rarest of rare in death penalty', url: 'https://example.com/case15' },
        { id: '16', title: 'Aruna Shanbaug v. Union of India', citation: '(2011) 4 SCC 454', summary: 'Passive euthanasia allowed under strict conditions', url: 'https://example.com/case16' },
        { id: '17', title: 'Nandini Satpathy v. P.L. Dani', citation: '(1978) 2 SCC 424', summary: 'Right against self-incrimination', url: 'https://example.com/case17' }
      ];

      setCaseData(cases);
      setShowResults(true);
      
      const prompt = `Please analyze these landmark cases and their implications. Format your response with clear titles, bullet points, and proper line breaks for readability: ${cases.map(c => c.title).join(', ')}`;
      const result = await geminiModel.generateContent(prompt);
      const analysis = await result.response.text();
      
      setMessages(prev => [...prev, 
        {
          id: uuidv4(),
          role: 'user',
          content: 'Show relevant case law analysis',
          sender: 'user',
          timestamp: new Date()
        },
        {
          id: uuidv4(),
          role: 'assistant',
          content: analysis,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Error fetching cases:', error);
      setError('Failed to fetch case law. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLegalTemplate = async () => {
    setShowLegalTemplate(true);
    try {
      setIsLoading(true);
      const prompt = "Please suggest appropriate legal templates based on common legal needs and provide guidance on their usage. Format your response with clear titles, bullet points, and proper line breaks for readability.";
      const result = await geminiModel.generateContent(prompt);
      const analysis = await result.response.text();
      
      setMessages(prev => [...prev, 
        {
          id: uuidv4(),
          role: 'user',
          content: 'Show legal template recommendations',
          sender: 'user',
          timestamp: new Date()
        },
        {
          id: uuidv4(),
          role: 'assistant',
          content: analysis,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Error getting template suggestions:', error);
      setError('Failed to load template suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: uuidv4(),
      role: 'user',
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);
    setSearchQuery(input);

    try {
      // Enhanced prompt with formatting instructions
      const enhancedPrompt = `${input}

Please format your response with:
- Clear titles using ## for main headings and ### for subheadings
- Bullet points using * or - for lists
- Proper line breaks between sections
- Bold text using **text** for emphasis
- Numbered lists when appropriate
- Clear structure that's easy to read and scan

Make your response well-organized and visually appealing.`;

      const chat = geminiModel.startChat({
        history: messages.map((msg) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: msg.content,
        })),
      });
      
      const result = await chat.sendMessage(enhancedPrompt);
      const response = await result.response;
      const assistantMessage: ChatMessage = {
        id: uuidv4(),
        role: 'assistant',
        content: await response.text(),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Error:', error);
      setError(
        error?.status === 400 ? 'Invalid request. Please check your input and try again.' :
        error?.status === 401 ? 'Invalid API key. Please check your Gemini API key configuration.' :
        error?.status === 429 ? 'Rate limit exceeded. Please try again in a few moments.' :
        'An error occurred while processing your request. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row p-0 gap-1">
      <div className="flex-1 w-full sm:w-4/5 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">AI Chat</h2>
        </div>

        <div ref={chatContainerRef} className="h-[400px] sm:h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
              }`}>
                <div className="prose prose-sm max-w-none">
                  {message.role === 'assistant' ? (
                    <div dangerouslySetInnerHTML={{
                      __html: message.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/## (.*?)(\n|$)/g, '<h2 class="text-lg font-bold mt-4 mb-2">$1</h2>')
                        .replace(/### (.*?)(\n|$)/g, '<h3 class="text-md font-semibold mt-3 mb-2">$1</h3>')
                        .replace(/^\* (.*?)$/gm, '<li>$1</li>')
                        .replace(/^- (.*?)$/gm, '<li>$1</li>')
                        .replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc ml-4 mb-2">$1</ul>')
                        .replace(/^\d+\. (.*?)$/gm, '<li>$1</li>')
                        .replace(/\n/g, '<br>')
                    }} />
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-300 rounded-lg p-3">
                <div className="typing-indicator">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm">{error}</p>
            </div>
          )}
        </div>

        {/* {file && (
          <FileUploadPreview 
            file={file} 
            onRemove={() => setFile(null)} 
            onAnalysis={handleAnalysis}
          />
        )} */}

        {/* <div className="flex flex-wrap gap-1 justify-center items-center p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex gap-2">
            <button
              onClick={handleLegalTemplate}
              className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FilePlus className="w-4 h-4" />
              <span>Templates</span>
            </button>

            <button
              onClick={handleFetchCases}
              className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Case</span>
            </button>

            <label className="flex items-center gap-2 bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              <FileText className="w-4 h-4" />
              <span>Upload</span>
              <input 
                type="file" 
                className="hidden" 
                onChange={handleFileChange} 
                accept=".txt,.doc,.docx,.pdf"
              />
            </label>
          </div>
        </div> */}

        <div className="flex items-center gap-3 border-t p-4 bg-white">
          <label className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
            <input
              type="file"
              accept=".txt,.pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <FilePlus className="w-5 h-5 text-gray-600 hover:text-blue-600" />
          </label>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Ask a question or upload a document..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          
          <button
            type="button"
            onClick={handleVoiceInput}
            className={`p-2 rounded-full transition-colors ${
              isListening 
                ? 'bg-red-100 text-red-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title="Voice input"
          >
            <Mic className="w-5 h-5" />
          </button>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            disabled={isLoading || !input.trim()}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-md p-4 mt-0 sm:mt-0">
        <h2 className="text-lg font-semibold mb-4">Web Search Results</h2>
        <WebSearchResults searchQuery={searchQuery} />
      </div>

      {showLegalTemplate && (
        <LegalDraftingPanel
          templates={legalTemplateButton}
          onClose={() => setShowLegalTemplate(false)}
          onSelectTemplate={() => {}}
        />
      )}

      {showResults && (
        <CaseLawResults
          cases={caseData}
          onClose={() => setShowResults(false)}
        />
      )}
    </div>
  );
}