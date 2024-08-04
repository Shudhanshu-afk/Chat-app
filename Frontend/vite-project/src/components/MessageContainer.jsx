import React, { useState, useEffect, useContext } from 'react'

import useConversation from '../ZUSTAND/useConversation'
import { useSocketContext } from '../Context/SocketContext'

import useMessages from '../Hooks/useMessages'
import Message from './Message'
import { AuthContext } from '../Context/AuthContext'
import messageIcon from '../assets/messageIcon.svg'
import Messageinput from './Messageinput'
import useListenMessages from '../Hooks/useListenMessages'

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {onlineUsers} = useSocketContext();
  useListenMessages();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  const { messages, loading } = useMessages();
  const { authuser } = useContext(AuthContext);
  const lastMessageRef = React.useRef();
  console.log(messages);
  messages?.sort((a, b) => a.createdAt - b.createdAt);
 

  useEffect(() => {
    setSelectedConversation(null);
  }, []);
  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);





  return (
    <>

      <div className=' h-full flex flex-col relative'>
      {selectedConversation ? <div className='p-4 flex items-center  border-b'> <img className='h-9 mr-6' src={selectedConversation.profilepic} alt="" /><div> <h1 className='text-xl mr-3'>{selectedConversation.username}</h1>{isOnline?<h1 className='text-sm text-gray-400'>Online</h1>: ''}</div></div> : <div></div>}
      <div className='h-3/4 overflow-y-scroll'>
        {selectedConversation ? messages.length > 0 ? !loading && messages.map((message) => (
          
          <div ref={lastMessageRef}>
            <Message  key={message._id} message={message} />

          </div>
          
        )) : <div className='flex justify-center'><h1>Start a conversation</h1></div> :
          <div className='h-3/4 flex flex-col text-center justify-center content-center '>
            <p>Welcome 👋 {authuser.user.name} </p>
            <p>Select a chat to start messaging</p>
            <img className='h-28' src={messageIcon} alt="" />
          </div>
        }
        </div>
       <div className=''>

        {selectedConversation ? <Messageinput /> : <div></div>}
        </div>

      </div>

    </>
  )
}

export default MessageContainer
