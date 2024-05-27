import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Comp} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let logout = localStorage.getItem('logout')
        if(!logout){
            navigate("/logout")
        }
    })
  return (
    <div>
        <Comp/>
    </div>
  )
}

export default Protected