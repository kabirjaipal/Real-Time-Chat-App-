import React, { useState } from "react";
import { AuthPage, ChatsPage } from "./components";

const App = () => {
  const [user, setUser] = useState(null);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
};

export default App;
