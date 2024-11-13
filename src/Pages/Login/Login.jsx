import React, { useState } from 'react'
import Logo from '/logo.png'
import './login.css'
import { login, signup } from '../../firebase'


const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event)=>{
    event.preventDefault();
    if(signState==="Sign In"){
      await login(email, password);
    } else {
      await signup(name, email, password );
    }
  }

  return (

    <div className=' Login h-screen px-5  ' >
      <img src={Logo} alt="LoginLogo" className='w-40 py-10' />
      <div className='login-form w-full max-w-sm m-auto p-16 rounded '>
        <h1 className=' text-4xl font-bold mb-7'>{signState}</h1>
        <form  className=' space-y-6 w-full '>

          {signState==="Sign Up"?
           <input value={name} to onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' className='w-full h-12 bg-deepdark text-white px-3'/>:
          <></>}
          <input value={email} to onChange={(e)=>{setEmail(e.target.value)}}  type="email" placeholder='Email Id' className='w-full h-12 bg-deepdark text-white px-3' />
          <input value={password} to onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder='Password' className='w-full h-12 bg-deepdark text-white px-3' />

          <button onClick={user_auth} type='submit' className='bg-red-600 hover:scale-95  duration-300 rounded  w-full  font-bold py-3'>{signState}</button>

          <div className="form-help justify-between flex text-slate-400 text-sm gap-14  ">
            <div className="remember ">
              <input type="checkbox" />
              <label htmlFor=""> Remember Me</label>
            </div>
            <p> Need Help ?</p>
          </div>
        </form>
        <div className="from-switch text-sm mt-7 text-lightdark space-y-1">

          {signState==="Sign In"?
          <p>New to Netflix ?
             <samp className='font-medium text-white' onClick={()=>{setSignState("Sign Up")}}> Sign Up Now</samp>
          </p>:<p>Already have Account ? 
            <samp className='font-medium text-white' onClick={()=>{setSignState("Sign In")}}> Sign In Now</samp>
            </p>}

        </div>
      </div>
    </div>
  )
}

export default Login