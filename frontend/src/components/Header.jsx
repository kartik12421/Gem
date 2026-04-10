import React from "react";
import { ChatData } from "../context/ChatContext";

const Header = () => {
  const {chats} = ChatData();
  return (
    <div>
        <p className="text-lg mb-6">Hello master, how are you today...?</p>
      {chats && chats.length === 0 && (
        <p className="text-lg mb-6">Please create new chat...</p>
      )}
    </div>
  );
};

export default Header;
