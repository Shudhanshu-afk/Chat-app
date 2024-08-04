import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate, Link } from 'react-router-dom';
import useSignup from '../Hooks/useSignup.js';

const Signup = () => {
    const navigate = useNavigate();
    const [newuser,setnewuser] = useState({name:'',username:'', password:'', confirmpassword:'', gender:''});
    const {signUp, loading} = useSignup();
    const handlechange = (evt)=>{
        setnewuser((currdata)=>{
            currdata[evt.target.name] = evt.target.value;
            return {...currdata};
        })
    };
    const signup = async(e)=>{
      e.preventDefault();
      await signUp(newuser);
      navigate('/login');
    }
  return (
    <div>
      <div className="bg-blue-400 h-screen">
        <div className='flex justify-center items-center h-full'>
            <div className='text-black bg-white w-1/4 h-fit flex flex-col items-center gap-8 rounded-xl'>
             <h1 className='text-4xl mt-7'>Signup:</h1>
             
                <form className='flex flex-col w-1/2 gap-7 ' action="">
                    
                    <input className='bg-white border-2 w-full h-10 outline-none p-4 rounded-lg' onChange={handlechange} name='name'  type="text" placeholder='Full name' value={newuser.name}/>
                    <input className='bg-white border-2 w-full h-10 outline-none p-4 rounded-lg' onChange={handlechange} name='username'  type="text" placeholder='Username' value={newuser.username}/>
                    <input className='bg-white border-2 w-full h-10 outline-none p-4 rounded-lg' onChange={handlechange} name='password' type="text" placeholder='Password' value={newuser.password}/>
                    <input className='bg-white border-2 w-full h-10 outline-none p-4 rounded-lg' onChange={handlechange} name='confirmpassword'  type="text" placeholder='Confirm Password' value={newuser.confirmpassword}/>
                    <div className='flex'>
                    <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={newuser.gender === 'male'}
            onChange={handlechange}
            className="form-radio text-blue-500"
          />
          <span className="ml-2">Male</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={newuser.gender === 'female'}
            onChange={handlechange}
            className="form-radio text-blue-500"
          />
          <span className="ml-2">Female</span>
        </label>
      </div>
                  
                    </div>
                    </form>
                    <button onClick={signup}  className='bg-blue-500  p-4 rounded-lg hover:bg-blue-400 active:bg-slate-300 text-white'>Signup</button>
                    <h1 className='mb-9'>Already a user  : <Link to={'/login'}><a className='text-blue-800' href="">Login</a></Link></h1>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Signup
