// import type { Message } from '../types/database';
import { generateId } from '../utils/ids';

// Mock database storage
const mockDatabase: {
  messages: Message[];
} = {
  messages: [],
};

// Mocked dbHelpers
const dbHelpers = {
  createMessage: {
    run: (id: string, content: string, senderId: string, receiverId: string) => {
      mockDatabase.messages.push({
        id,
        content,
        sender_id: senderId,
        receiver_id: receiverId,
        read: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    },
  },
  getMessagesBetweenUsers: {
    all: (userId1: string, userId2: string) => {
      return mockDatabase.messages.filter(
        (message) =>
          (message.sender_id === userId1 && message.receiver_id === userId2) ||
          (message.sender_id === userId2 && message.receiver_id === userId1)
      );
    },
  },
  markMessageAsRead: {
    run: (messageId: string) => {
      const message = mockDatabase.messages.find((msg) => msg.id === messageId);
      if (message) {
        message.read = true;
        message.updated_at = new Date().toISOString();
      }
    },
  },
};

// Mocked Message type for testing
interface Message {
  id: string;
  content: string;
  sender_id: string;
  receiver_id: string;
  read: boolean;
  created_at: string;
  updated_at: string;
}

// Mocked messageService implementation
export const messageService = {
  sendMessage: (content: string, senderId: string, receiverId: string): Message => {
    const id = generateId();
    dbHelpers.createMessage.run(id, content, senderId, receiverId);
    return {
      id,
      content,
      sender_id: senderId,
      receiver_id: receiverId,
      read: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  },

  getConversation: (userId1: string, userId2: string): Message[] => {
    return dbHelpers.getMessagesBetweenUsers.all(userId1, userId2) as Message[];
  },

  markAsRead: (messageId: string): void => {
    dbHelpers.markMessageAsRead.run(messageId);
  },
};
