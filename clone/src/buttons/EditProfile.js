import React, { useState } from 'react'

const EditProfile = ({isOpen ,isClose}) => {

 const [input , setInputs]=useState({
    fullName: '',
    username: '',
    bio:''
 })

  return (
    <div>EditProfile</div>
  )
}

export default EditProfile