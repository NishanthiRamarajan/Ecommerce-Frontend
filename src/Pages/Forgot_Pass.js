import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import fs from './Forgot_Pass.module.css';

const Forgot_Pass = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleResetPassword = () => {
    if (!email || !password) {
      toast.error('Please enter both email and password.');
    } else {
      console.log('Resetting password with email:', email, 'and password:', password);
      // Perform reset password action
      navigate('/login');
    }
  };

  return (
    <div className={fs['container_fog']}>
      <div id={fs["signInBorder"]}>

        <label className={fs['label_fog']}>Email ID</label>
        <br/>
        <input id={fs['input_fog']} type="email" name="email" value={email} onChange={handleEmailChange}/>
        <br />

        <label className={fs['label_fog']}>New Password</label>
        <br />
        <input id={fs['input_fog']} type="password" name="newPassword" value={password} onChange={handlePasswordChange}/>
        <br />
        
        <label className={fs['label_fog']}>Confirm Password</label>
        <br />
        <input id={fs['input_fog']} type="password" name="confirmPassword" />
        <div>
          <button className={fs['butt_fog']} id={fs["amazon_fog"]} onClick={handleResetPassword}>Reset Password</button>
        </div>

      {/*  <p>
          <Link to="#" className={fs['link_fog']}>Conditions of Use</Link>
          <Link to="#" className={fs['link_fog']}>Instructions</Link>
          <Link to="#" className={fs['link_fog']}>Get Help</Link>
  </p>*/}

      </div>
      <div className={fs["jumping-emoji"]}>🔐</div>
      <ToastContainer/>
    </div>
  );
};

export default Forgot_Pass;
