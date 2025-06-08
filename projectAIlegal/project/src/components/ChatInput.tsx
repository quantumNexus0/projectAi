import React, { useState } from 'react';
import { Send, Upload, Search, FileText, Globe } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onUploadFile: (file: File) => void;
  onFindCaseLaw: () => void;
  onGetLegalDraft: () => void;
  onWebSearch: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  onUploadFile, 
  onFindCaseLaw,
  onGetLegalDraft,
  onWebSearch
}) => {
  const [message, setMessage] = useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onUploadFile(files[0]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          onClick={triggerFileUpload}
          className="upload-button"
        >
          <Upload className="h-5 w-5" />
          <span>Upload PDF</span>
        </button>
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf"
          className="hidden"
        />
        
        <button 
          onClick={onFindCaseLaw}
          className="feature-button"
        >
          <Search className="h-5 w-5" />
          <span>Find Case Laws</span>
        </button>
        
        <button 
          onClick={onGetLegalDraft}
          className="feature-button"
        >
          <FileText className="h-5 w-5" />
          <span>Legal Drafting</span>
        </button>
        
        <button 
          onClick={onWebSearch}
          className="feature-button"
        >
          <Globe className="h-5 w-5" />
          <span>Web Search</span>
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask your legal query... Be specific and ask in any language"
          className="chat-input"
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;