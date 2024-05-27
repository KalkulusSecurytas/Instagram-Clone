import React, {useState} from 'react'
import "./Signupform.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Link } from 'react-router-dom';
  import axios from 'axios'


const Signupform = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const signmsg = () => toast.success('Signed in Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:9000/signin', {
          email,
          username,
          password
        });

        if (response.data.success) {
          // setLoggedIn(true);
          signmsg();
        } else {
          // toast.error('Invalid email or password', { // Notify user of invalid login attempt
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
      
      
  return (
    <div>
        <div className="signup">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <form onSubmit={(e) => {
            handleSubmit(e);
            signmsg();
          }} className='form'>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        required
        name='email'
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="username"
        placeholder="Username"
        required
        value={username}
        name='username'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        required
        value={password}
        name='password'
      />
      <Link onClick={togglePasswordVisibility} className='show-passw link'>
          {showPassword ? 'Hide' : 'Show'} 
          </Link>


      <button className='sbtn' type='submit'>Sign up</button>
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
    </div>
    
    </div>
  )
}

export default Signupform