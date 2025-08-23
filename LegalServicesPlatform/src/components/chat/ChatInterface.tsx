import React from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';


const ChatInterface = () => {
  return (
    <div className="bg-white rounded-lg shadow-md h-[600px] flex">
      <div className="w-1/3">
        <ChatList />
      </div>
      <div className="w-2/3">
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatInterface;