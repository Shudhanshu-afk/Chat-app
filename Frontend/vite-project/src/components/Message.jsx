import React from 'react'
import useConversation from '../ZUSTAND/useConversation'
import { getTime } from '../utils/getTime.js';
import { AuthContext } from '../Context/AuthContext'



const Message = ({ message }) => {
    const { selectedConversation } = useConversation();
    const formattedTime = getTime(message.createdAt);
    const {authuser} = React.useContext(AuthContext);



    if (message.senderid === selectedConversation._id) {
        return (
            <div className='flex  justify-start p-2 gap-3'>

                <div className='bg-gray-200 p-2 rounded-tl-lg rounded-br-lg rounded-tr-lg'>{message.message}</div>
                <div className='text-xs text-gray-500 flex items-center'>{formattedTime}</div>
            </div>
        )
    } else {
        return(
            <div className='flex  justify-end p-2 gap-3'>
                <div className='text-xs text-gray-500 flex items-center'>{formattedTime}</div>
        <div className='bg-blue-300 p-2 rounded-tl-lg rounded-bl-lg rounded-tr-lg'>{message.message}</div>
        <img className='h-10' src={authuser.user.profilepic} alt="" />
        </div>
        )
    }



}

export default Message
