import { create } from 'zustand';
import { messageService } from '../services/messageService';

// Temporary Message interface for testing purposes
interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: string;
}

interface ChatState {
  activeChat: {
    id: string;
    participants: string[];
  } | null;
  messages: Message[];
  setActiveChat: (userId: string) => void;
  sendMessage: (message: Message) => void;
  loadMessages: (userId1: string, userId2: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set) => ({
  activeChat: null,
  messages: [],
  setActiveChat: (userId: string) => {
    set({
      activeChat: {
        id: userId,
        participants: [userId],
      },
    });
  },
  sendMessage: (message: Message) => {
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
  loadMessages: async (userId1: string, userId2: string) => {
    try {
      const messages = await messageService.getConversation(userId1, userId2);
      set({ messages });
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  },
}));
