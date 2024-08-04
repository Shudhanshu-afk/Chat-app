import { useEffect } from "react";
import { useSocketContext } from "../Context/SocketContext"
import useConversation from "../ZUSTAND/useConversation";


const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(()=>{

    socket?.on('newMessage', (message)=>{
        setMessages([...messages,message]);
    });

    return ()=>{
      socket?.off('newMessage');
    }
  },[socket, setMessages, messages]);



}

export default useListenMessages
