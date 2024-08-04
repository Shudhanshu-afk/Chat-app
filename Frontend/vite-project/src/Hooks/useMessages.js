import { useEffect, useState } from 'react';
import useConversation from '../ZUSTAND/useConversation.js';
import axios from 'axios';
import { set } from 'mongoose';
const useMessages = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();
    
    const getMessages = async () => {
        setLoading(true);
        try {
            const res =await axios.get(`http://localhost:8000/api/messages/${selectedConversation._id}`,{withCredentials:true});
            const data = await res.data;
            if (data.length == 0) {
                setMessages([]);
                
            } else {
                setMessages(data);

                
            }
            
            
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        if(selectedConversation?._id){
            getMessages();
        }

    }, [selectedConversation, setMessages, messages.length]);
return {loading, messages};

}

export default useMessages;