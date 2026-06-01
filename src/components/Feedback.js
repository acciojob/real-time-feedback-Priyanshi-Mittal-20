import React from 'react'
import { useState } from 'react'

const Feedback = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [nameErr,setNameErr]=useState("")
  const [emailErr,setEmailErr]=useState("")
  const [passwordErr,setPasswordErr]=useState("")
  function handleName(e)
  {
    const value = e.target.value;
    setName(value)
    if(value.length==0)
    {
      setNameErr("Name is required")
    }
    else{
      setNameErr("")
    }
  }
  function handleEmail(e)
  {
    const value = e.target.value;
    setEmail(value)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(value)) {
        setEmailErr("");
      } else {
        setEmailErr("Invalid email format");
      }
  }
  function handlePassword(e)
  {
    const value = e.target.value;
    setPassword(value)
    if(value.length<6)
    {
      setPasswordErr("Password must be at least 6 characters long")
    }
    else
    {
      setPasswordErr("")
    }
  }
  return (
    <form>
      <label htmlFor="name">Name</label><br/>
      <input type="text" id="name" value={name} onChange={handleName} required /><br/>
      {
        nameErr && <p className="error-message">{nameErr}</p>
      }
      <label htmlFor="email">Email</label><br/>
      <input type="email" id="email" value={email} onChange={handleEmail} /><br/>
      {
        emailErr && <p className="error-message">{emailErr}</p>
      }
      <label htmlFor="password">Password</label><br/>
      <input type="password" id="password" value={password} onChange={handlePassword} /><br/>
      {
        passwordErr && <p className="error-message">{passwordErr}</p>
      }
    </form>
  )
}

export default Feedback
