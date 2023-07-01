import React, { useState } from 'react';
import axios from 'axios';
import signup_image from '../../assets/images/Fitness tracker-rafiki (1).png'
import './RegisterAuth.css'
const RegisterAuth = () => {
  const [username , setusername] = useState("");
  const [age , setAge] = useState("");
  const [height , setHeight] = useState("");
  const [weight , setWeight] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const RegisterUser = () =>{
    const registration_data = {
      "username":username,
      "age":age,
      "height":height,
      "weight":weight,
      "email":email,
      "password":password
    }
    axios.post('http://localhost:3001/register',registration_data)
     .then(response => {
       console.log(response.data);
     })
  }
  return (
    <div className="main__page_reg">
        <div className="main__page_reg-image">
           <div className="center">
             <img src={signup_image} height='500px' alt='' />
           </div>
        </div>
        <div className="main__page_reg-form">
          <div className="center">
            <div className="registration-card">
              <h2 className="page-title">Create An Account</h2>
              <div className="registration-form">
                <input className='input' type="text" name='username' placeholder='Name...' 
                  onChange={(e) => setusername(e.target.value)} required/>
                <div className="input-detail-box">
                 <input className='input-detail' type="text" name='age' placeholder='Age...' 
                 onChange={(e) => setAge(e.target.value)} required />
                 <input className='input-detail' type="text" name='height' placeholder='Height (in cm)' 
                 onChange={(e) => setHeight(e.target.value)} required />
                 <input className='input-detail' type="text" name='weight' placeholder='Weight (in kg)' 
                 onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <input className='input' type="text" name='email' placeholder='Email...' 
                 onChange={(e) => setEmail(e.target.value)} required />
                <input className='input' type="password" name='password' placeholder='Password...' 
                 onChange={(e) => setPassword(e.target.value)} required />
                <input className='checkbox' type="checkbox" name="" id="" required />
                <label className='checkbox'>I agree to the Privacy Policy and Terms & Condition of the Service</label>
                <button type='submit' onClick={RegisterUser} className="registration-button">Create Account</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};

export default RegisterAuth;