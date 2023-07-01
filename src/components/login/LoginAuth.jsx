import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginAuth.css';
import login_image from '../../assets/images/Fitness tracker-bro.png';
const LoginAuth = () => {
  const [email,SetEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loggedIn,setloggedIn] = useState(false)
  useEffect(()=>{
      axios.get('http://localhost:3001/login',{withCredentials:true})
      .then( response => console.log(response.data))
      .catch(err => console.log(err))
  },[])
  const LoginUser = () =>{
    const login_data = {
      "email":email,
      "password":password
    }
    console.log(login_data);
    axios.post('http://localhost:3001/login',login_data,{withCredentials:true})
     .then(response => {
       console.log(response.data);
     })
  }
  return (
    <div className='main__page'>
        <div className="main__page-image">
          <div className="center">
            <div className="login-card">
               <h2 className="welcome">Sign in</h2>
               <div className='login-form'>
                 <input placeholder='Email' name='email' type='text'
                  onChange={(event) => SetEmail(event.target.value)} required />
                 <input placeholder='Password' name='password' type='password' 
                  onChange={(event) => setPassword(event.target.value)} required />
                 <button type='submit' onClick={LoginUser} className='button'>Go to Dashboard!</button>
                 <div className="form-footer">
                 <p className="form-footer-link">
                  <a href="/register">Create an Account!</a>
                 </p>
                 <p className="form-footer-link">
                  <a href="/forgot-password">Forgot Password?</a>
                 </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
        <div className="main__page-form">
          <div className="center">
            <img src={login_image} height='500px' alt='' />
          </div>
        </div>
    </div>
  )
}

export default LoginAuth;
