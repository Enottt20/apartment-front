import React from 'react';
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import person_icon from '../assets/person.png'

const Registration: React.FC = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={person_icon} alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>
        </div>
        <div className="forgot-password">Lost password? <span>Click here</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  );
};

export default Registration;