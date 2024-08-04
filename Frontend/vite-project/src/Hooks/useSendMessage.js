import toast from "react-hot-toast";
import useConversation from "../ZUSTAND/useConversation"
import { useState } from "react";
import axios from "axios";

const useSendMessage =  () => {
    const [loading, setLoading] = useState(false);
    const {selectedConversation, messages, setMessages} = useConversation();
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await axios.post(`http://localhost:8000/api/messages/send/${selectedConversation._id}`, {message},{withCredentials:true});
            toast.success("Message sent successfully");
            setMessages([...messages,res]);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }

    }
    return {sendMessage, loading};


}

export default useSendMessage;