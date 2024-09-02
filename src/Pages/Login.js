import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'; 
import ls from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    if (email === '' || password === '') {
      toast.error('Please enter both email and password.');
    } else {
      if ((email === 'nish@gmail.com' && password === 'nishh')||
      (email=== 'ponshika@gmail.com' && password==='ponshika')||(email==='praga@gmail.com' && password==='praga')){
        navigate('/');
      } else {
        toast.error('Enter the credentials correctly');
      }
    }
  };
  

  return (
    <div className={ls['container_log']}>
      <p id={ls["SignInTxt"]}>Sign in</p>
      <div id={ls["signInBorder"]}>
        <label className={ls['label_log']}>
          Email (phone for mobile accounts)
          <br />
          <input id={ls['input_log']} type="email" name="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label className={ls['label_log']}>
          Password
          <span>
            <Link to='/forgotPassword'><a href="#" id={ls["password"]}>Forgot your password?</a></Link>
          </span>
          <br />
          <input id={ls['input_log']} type="password" name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <div>
          <button id={ls["amazon"]} onClick={handleSignIn} className={ls['butt_log']}>Sign in</button>
        </div>
        <div id="createAccount">
          <h2 className={ls['style_head']}>
            <span className={ls['sp_log']}>New to Ziara?</span>
          </h2>
          <Link to='/signup'><button id={ls["newAccount"]} name="newAcct" className={ls['butt_log']}>Create your Ziara account</button></Link>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;