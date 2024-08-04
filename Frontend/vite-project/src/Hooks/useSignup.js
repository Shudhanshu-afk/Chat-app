import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
const handleInputErrors = ({name, username, password, confirmpassword,gender})=>{
    if(!name || !username || !password || !confirmpassword || !gender){
        toast.error("Please fill all the fields");
        return false;
    }
    if (password !== confirmpassword) {
        toast.error("Passwords do not match");
        return false;
        
    }
    if (password.length < 6) {
        toast.error("Password should be atleast 6 characters long");
        return false;
    }
    return true;
}

const useSignup = () => {
   const { setAuthUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const signUp = async({name, username, password , confirmpassword, gender})=>{
        if(handleInputErrors({name, username, password, confirmpassword, gender})){
            setLoading(true);
            try {
                const response = await axios.post("http://localhost:8000/api/auth/signup", {name, username,password,gender});
                if(response.status === 200){
                    toast.success("Signed Up Successfully");
                    navigate('/login');
                    const data = await response.data;
                    console.log(data);
                    localStorage.setItem('chat-user', JSON.stringify(data));
                    setAuthUser(data);
                }
                
            } catch (error) {
                toast.error("Error signing up");
            } finally {
                setLoading(false);
            }
            
        }

        
    }

    return {signUp, loading};
}

export default useSignup;
