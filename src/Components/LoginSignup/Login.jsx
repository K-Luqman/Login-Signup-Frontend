import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import '../LoginSignup/loginsignup.css'

import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [redirectToSignup, setRedirectToSignup] = useState(false);

  const handleLogin = () => {
    const existingData = JSON.parse(localStorage.getItem('signupData')) || [];

    const user = existingData.find((user) => user.username === username && user.password === password);

    if (user) {
    
      console.log("Login successful");
    } else {
      setLoginError('Invalid username or password');
    }

    setUsername('');
    setPassword('');
  };

  if (redirectToSignup) {
    return <Navigate to="/Signup" />;
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      {loginError && <div className="error">{loginError}</div>}

      <div className="Already-Have-Account">
        Don't have an account?
        <span className="Already-Have-Account" onClick={() => setRedirectToSignup(true)}>Signup</span>
      </div>

      <div className="submit-container">
        <div className={action === "Signup" ? "submit gray" : "submit"} onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
};

export default Login;

