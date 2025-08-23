import React from 'react';
import { useChatStore } from '../../store/chatStore';
import { useAuthStore } from '../../store/authStore';


const  ChatList = () => {
  const { chats, setActiveChat, activeChat } = useChatStore();
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <div className="border-r h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Messages</h2>
      </div>
      <div className="space-y-2">
        {chats.map((chat) => {
          const otherParticipant = chat.participants.find((id) => id !== user.id);
          const unreadCount = chat.messages.filter(
            (msg) => !msg.read && msg.senderId !== user.id
          ).length;

          return (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`w-full p-4 text-left hover:bg-gray-50 ${
                activeChat?.id === chat.id ? 'bg-gray-100' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{otherParticipant}</p>
                  {chat.lastMessage && (
                    <p className="text-sm text-gray-500 truncate">
                      {chat.lastMessage.content}
                    </p>
                  )}
                </div>
                {unreadCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
