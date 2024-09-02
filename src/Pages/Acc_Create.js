import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import acs from './Acc_Create.module.css';

const Acc_Create = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateAccount = () => {
    if (email === '' || password === '') {
      toast.error('Please enter both email and password.');
    } else {
      console.log('Creating account with email:', email, 'and password:', password);
      navigate('/');
    }
  };

  return (
    <div className={acs['container_acc']}>
      <p id={acs['SignInTxt']}>Create New Account</p>
      <div id={acs['signInBorder']}>
        <label className={acs['label_acc']}>Email ID</label> <br />
        <input
          id={acs['input_acc']}
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label className={acs['label_acc']}>Create Password</label>
        <br />
        <input
          id={acs['input_acc']}
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <label className={acs['label_acc']}>Re-enter Password</label>
        <br />
        <input id={acs['input_acc']} type="password" name="password" />
        <div>
          <button
            id={acs['amazon_acc']}
            className={acs['butt_acc']}
            onClick={handleCreateAccount}>
            Create Your Ziara Account
          </button>
        </div>
        <p>
          <Link to="#" className={acs['link_acc']}>
            Conditions of Use
          </Link>
          <Link to="#" className={acs['link_acc']}>
            Instructions
          </Link>
          <Link to="#" className={acs['link_acc']}>
            Get Help
          </Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Acc_Create;