import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useLogin = () => {
    const { setAuthUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleInputErrors = ({username, password})=>{
        if(!username || !password){
            toast.error("Please fill all the fields");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password should be atleast 6 characters long");
            return false;
        }
        return true;
    }
    const login = async({username, password})=>{
        if(handleInputErrors({username, password})){
            try {
                const response = await axios.post("http://localhost:8000/api/auth/login", {username, password},{withCredentials:true});
                if(response.status === 400){
                    toast.error("Invalid credentials");
                    
                }
                if(response.status === 200){
                    toast.success("Logged in Successfully");
                    const data = await response.data;
                    console.log(data);
                    localStorage.setItem('chat-user', JSON.stringify(data));
                    setAuthUser(data);
                    navigate('/home');
                }
            } catch (error) {
                console.log(error);
                toast.error("Invalid credentials");
        
            }
        }
    }

    return {login};



}