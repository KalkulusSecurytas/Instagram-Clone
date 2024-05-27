import React, { useState } from 'react';
import "./Forgotpass.css"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

const Forgotpass = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  

    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can implement your logic to send a password reset email
      // For simplicity, let's assume a success message is shown
      setMessage('Instructions to reset your password have been sent to your email.');
    };

  return (
    <div className='Forgot'>
      <div className='reset-head'>
        <LockOutlinedIcon
        sx={{ p: "15px", border: '2px solid' , width: '100px', height: '100px', borderRadius: "50%"}}
        />
        <p>Trouble logging in?</p>
        <span>Enter your email, phone, or username and we'll send you a link to get back into your account.
</span>
      </div>


      <div className='reset-input'>
        <form onSubmit={handleSubmit}>

        <input type='email'
        className='email-reset'
        id='email'
        value={email}
        onChange={handleChange}
        placeholder='Email'
        required
        /><br></br>
        <button type='submit' className='link-send' >Send Login Link</button><br></br>


        </form>
      </div>


      <div className='break'>
          <hr className='hr'></hr>
          <span>OR</span>
          <hr className='hr'></hr>
          </div>
          <button className='create-acc'>Create new account</button>
          {message && <p className='email-sent'>{message}</p>}

      <div className='return-login'>
        <hr className='end-back'></hr>
        <Link to="/logout">
        <button className='loginpage-redit'>Back to login</button>
        </Link>
      </div>
    </div>
  );
};

export default Forgotpass;
