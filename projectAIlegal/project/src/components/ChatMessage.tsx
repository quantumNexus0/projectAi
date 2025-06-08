import React from 'react';
import { Message } from '../types';
import { User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex gap-4 p-4 ${isUser ? 'message-user' : 'message-bot'} rounded-lg mb-4`}>
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="bg-blue-600 p-2 rounded-full">
            <User className="h-5 w-5 text-white" />
          </div>
        ) : (
          <div className="bg-slate-700 p-2 rounded-full">
            <Bot className="h-5 w-5 text-white" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="font-medium mb-1">{isUser ? 'You' : 'LegalAssist AI'}</div>
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
      <div className="text-xs text-slate-500 self-end">
        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default ChatMessage;