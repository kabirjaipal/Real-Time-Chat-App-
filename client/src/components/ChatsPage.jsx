import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = ({ user }) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={user.username}
        secret={user.secret}
      />
    </div>
  );
};

export default ChatsPage;
