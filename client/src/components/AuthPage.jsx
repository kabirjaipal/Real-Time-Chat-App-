import React from "react";
import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    // code
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post(`http://localhost:3000/authenticate`, { username: value })
      .then((res) => {
        props.onAuth({ ...res.data, secret: value });
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get Started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input type="text" name="username" className="auth-input" />
          <button type="submit" className="auth-button">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
