import React , {useState, useEffect}  from 'react'
import Signupform from './Signupform'
import "./Userpage.css"
import Loginform from './Loginform'
// import { useNavigate } from 'react-router-dom'

const Userpage = () => {
  // const logout = () => {
  //   localStorage.setItem('logout' , false)
  // }
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   let logout = localStorage.getItem('logout')
  //   if(logout){
  //     navigate('/')
  //   }
  // })




  useEffect(()=>{
    document.title = "Instagram"
})
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className='enter__page'>
        <div className='login__left'>
           <img src='https://i.imgur.com/P3Vm1Kq.png' alt='Instagram phome'/> 
        </div>

        
        <div className='login__right'>
        {active === "login" ? <Loginform /> : <Signupform />}
           
        <div className="login__more">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange }>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>

        </div>
        
    </div>
  )
}

export default Userpage