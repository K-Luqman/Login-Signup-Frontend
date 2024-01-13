import React, { useState} from "react";
import { Navigate } from "react-router-dom";

import './loginsignup.css'

import user_icon from '/home/luqman/loginsignup/src/Components/Assets/person.png'
import email_icon from '/home/luqman/loginsignup/src/Components/Assets/email.png'
import password_icon from '/home/luqman/loginsignup/src/Components/Assets/password.png'


const Signup = () => {

    const [action,setAction] =useState("Signup");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailid, setEmailId] = useState('');
    const [signupError, setSignupError] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);
   

    const handleSignup = () => {


        const existingData = JSON.parse(localStorage.getItem('signupData')) || [];

        const usernameExists = existingData.some((user) => user.username === username);

        if (usernameExists) {

          setSignupError('Username already exists');
        } else {
          const newCredentials = { username, password };
          const updatedData = [...existingData, newCredentials];
    
          localStorage.setItem('signupData', JSON.stringify(updatedData));
          setRedirectToLogin(true);

        }

        setUsername('');
        setEmailId('');
        setPassword('');
      };

      if (redirectToLogin) {
        return <Navigate to="/Login" />;
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
                    <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email Id" value={emailid} onChange={(e) => setEmailId(e.target.value)}/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>

            <div className="Already-Have-Account">
                Already have an account? 
                <span className="Already-Have-Account" onClick={() => setRedirectToLogin(true)}>Login</span>
                
      </div>

            <div className="submit-container">
                <div className={action==="Login"? "submit gray":"submit"} onClick={handleSignup}>Sign up</div>
            </div>

        </div>
    )
}

export default Signup
