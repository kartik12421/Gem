import React from "react";

const Header = () => {
  const chat = [{ chat: "chat1" }];
  return (
    <div>
        <p className="text-lg mb-6">Hello master, how are you today...?</p>
      {chat && chat.length === 0 && (
        <p className="text-lg mb-6">Please create new chat...</p>
      )}
    </div>
  );
};

export default Header;
