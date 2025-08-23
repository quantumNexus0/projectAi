import React, { useEffect, useRef } from 'react';
import { useAuthStore } from '../../store/authStore';
import { useChatStore } from '../../store/chatStore';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { messageService } from '../../services/messageService';


const ChatWindow: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuthStore();
  const { activeChat, messages, sendMessage } = useChatStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!user || !activeChat) return;

    const receiverId = activeChat.participants.find(id => id !== user.id);
    if (!receiverId) return;

    const message = messageService.sendMessage(content, user.id, receiverId);
    sendMessage(message); 
  };

  if (!activeChat || !user) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Select a conversation to start chatting</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
