import React, { useState  } from 'react';
import './Loginform.css';
import { Link, Navigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);

  // const correctPassword = 'admin';

  const handleSubmit = async (e) => { 
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/login', {
        email,
        password,
      });

      // Check if the response indicates successful login
      if (response.data.success) {
        // setLoggedIn(true);
        logmsg();
      } else {
        // toast.error('Invalid email or password', 
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const logmsg = () => {
    toast.success('Logged in Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // if (loggedIn) {
  //   return <Navigate to="/" />;
  // }

  setTimeout(() => {
    <Navigate to='/'/>
  }, 3000);

  return (
    <div>
      <div className="login">
        <img
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt=""
        />
        <form onSubmit={(e) => {
            handleSubmit(e);
            // logmsg();
          }} className='lform'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
            name='email'
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            name='password'
            required
          />
          <Link to='' onClick={togglePasswordVisibility} className='show-pass link'>
            {showPassword ? 'Hide' : 'Show'} 
          </Link>
          <Link to='/'>
          <button className='login__btn'  type='submit'
           onClick={logmsg}
           >Log in</button>
           </Link>
          <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
        </form>
        <div className='break'>
          <hr className='hr'></hr>
          <span>OR</span>
          <hr className='hr'></hr>
        </div>
        <Link to="/resetpassword">
          <button className='forgot__btn'>Forgot password?</button>
          
        </Link>
      </div>
    </div>
  );
};

export default Loginform;
