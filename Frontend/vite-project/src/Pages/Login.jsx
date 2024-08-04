import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Await, useNavigate, Link } from 'react-router-dom';
import { useLogin } from '../Hooks/useLogin';

const Login = () => {
    const [user,setuser] = useState({username:'', password:''});
    const {login} = useLogin();
    const navigate = useNavigate();
    const handlechange = (evt)=>{
        setuser((currdata)=>{
            currdata[evt.target.name] = evt.target.value;
            return {...currdata};
        })}
    const signin = async(evt)=>{
      evt.preventDefault();
      await login(user);
    }
  return (
    <div>
      <div className="">
      <div>
      <div className="h-screen bg-blue-400">
        <div className='flex justify-center items-center h-full'>
            <div className='text-black bg-white w-1/4 h-fit flex flex-col items-center gap-9 rounded-xl '>
             <h1 className='text-4xl mt-7'>Login:</h1>
             
                <form className='flex flex-col w-1/2 gap-7 ' action="">
                    
                    <input className='bg-white border-2 w-full h-10 outline-none p-4 rounded-lg' onChange={handlechange} name='username'  type="text" placeholder='Username' value={user.username}/>


                    
                    <input className='bg-white border-2 w-full h-10 outline-none p-4 rounded-lg' onChange={handlechange} name='password' type="text" placeholder='Password' value={user.password}/>
                    </form>
                    <button onClick={signin} className='bg-blue-500 text-white  p-4 rounded-lg hover:bg-slate-900 active:bg-slate-700'>Login</button>
                    <h1 className='mb-9'>Not a user? <Link to={'/signup'}> <a href="" className="text-blue-800">SignUp</a></Link></h1>
             </div>
            
        </div>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Login


