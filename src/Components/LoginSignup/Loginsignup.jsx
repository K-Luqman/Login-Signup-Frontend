import React, { useState } from "react";
import './loginsignup.css'

import user_icon from '/home/luqman/loginsignup/src/Components/Assets/person.png'
import email_icon from '/home/luqman/loginsignup/src/Components/Assets/email.png'
import password_icon from '/home/luqman/loginsignup/src/Components/Assets/password.png'


const LoginSignup = () => {

    const [action,setAction] =useState("Signup");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailid, setEmailId] = useState('');

    // const handleSignup = () => {
    //     // Save signup data in local storage
    //     const userData = { username, emailid, password };
    //     localStorage.setItem('userData', JSON.stringify(userData));
    //   };
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            {action==="Login" ? <div></div>:                 <div className="input">
            
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" value={username}/>
        </div>
}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email Id" value={emailid}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"value={password}/>
                </div>
            </div>

            {action==="Sign Up"?<div></div>:<div className="forgot-password">Forget Passowrd? <span>Click Here</span></div>}
            {action==="Sign Up"?<div></div>:<div className={action==="Signup"?"Already-Have-Account":"Already-Have-Account span"} onClick={()=>{setAction("Sign Up")}}>Don't Have Account? <span>Register Now</span></div>}

           
             {/* {action==="Login"?<div></div>:<div className="Already-Have-Account">Already Have Account? <span>Login</span> </div>} onClick={()=>{setAction("Login")}} */}
            
             {action==="Login"?<div></div>:<div className={action==="Signup"?"Already-Have-Account":"Already-Have-Account span"} onClick={()=>{setAction("Login")}}>Already Have Account? <span>Login</span></div>}

            <div className="submit-container">
                <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
      
        </div>
    )
}

export default LoginSignup