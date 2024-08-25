// import React from 'react'
// import "./Login.css";
// import Google from "../../assets/google.png";
// import Apple from "../../assets/apple.png";
// import Github from "../../assets/github.png";
// import twitter from "../../assets/twitter.png";
// import LinkedIn from "../../assets/link.png";
// import Car from "../../assets/car.png"
// const Login = () => {
//   return (
//     <div className="logoCon">
//       <div className='heading'>
//           <span>Sign In</span>
//           <span className='last'>Sign in to your account</span>
//           <div className='LogImg'>
//             <img src={Google} alt="google"/>
//             <img src={Apple} alt='apple'/>
//           </div>
//       </div>
//       <div className='formCon'>
//         <form>
//           <div className='inp'>
//               <label>Email Address</label>
//               <input type='email'/>
//           </div>
//           <div className='inp'>
//               <label>Password</label>
//               <input type='password'/>
//           </div>
          
//           <div className='divfor'>
//             <label className='forget'>
//               forget Password ?
//             </label>
//           </div>
//           <div className='button'>
//             <button >Sign In</button>
//           </div>
//         </form>
       
//       </div>
//       <h1>Don't have an account? <span style={{color:"rgba(73, 121, 217, 1)"}}>Register here</span></h1>
//       <div className='icons'>
//           <img src={Github} alt='github'/>
//           <img src={twitter} alt='twitter'/>
//           <img src={LinkedIn} alt='LinkedIn'/>
//           <img src={Car} alt='car'/>
//       </div>
//     </div>
//   )
// }

// export default Login

//----------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import Google from "../../assets/google.png";
import Apple from "../../assets/apple.png";
import Github from "../../assets/github.png";
import Twitter from "../../assets/twitter.png";
import LinkedIn from "../../assets/link.png";
import Car from "../../assets/car.png";

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      if (email[0] === email[0].toUpperCase()) {
        navigate('/upload?notify=true'); 
      } else {
        navigate('/upload'); // Updated navigation method
      }
    }
  };

  return (
    <div className="logoCon">
      <div className='heading'>
        <span>Sign In</span>
        <span className='last'>Sign in to your account</span>
        <div className='LogImg'>
          <img src={Google} alt="google" />
          <img src={Apple} alt='apple' />
        </div>
      </div>
      <div className='formCon'>
        <form>
          <div className='inp'>
            <label>Email Address</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='inp'>
            <label>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='divfor'>
            <label className='forget'>
              Forget Password?
            </label>
          </div>
          <div className='button'>
            <button type='submit' onClick={handleLogin}>Sign In</button>
          </div>
        </form>
      </div>
      <h1>Don't have an account? <span style={{ color: "rgba(73, 121, 217, 1)" }}>Register here</span></h1>
      <div className='icons'>
        <img src={Github} alt='github' />
        <img src={Twitter} alt='twitter' />
        <img src={LinkedIn} alt='LinkedIn' />
        <img src={Car} alt='car' />
      </div>
    </div>
  );
}

export default Login;
