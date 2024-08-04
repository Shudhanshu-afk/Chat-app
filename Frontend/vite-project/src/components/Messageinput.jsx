import React from 'react'
import { useState } from 'react';
import useSendMessage from '../Hooks/useSendMessage'
import sendicon from '../assets/send.svg'

const Messageinput = () => {
    const [input , setInput] = useState('');
    const {sendMessage} = useSendMessage();

    const handlechange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
      }

    const handlesubmit = async(e) => {
        e.preventDefault();
        await sendMessage(input);
        setInput('');
      }
  return (
    <div>
      <div className='flex items-center justify-center h-14 gap-4 w-full '>
      <input className='bg-gray-200 h-9 w-3/4 outline-none p-3 rounded-xl' type="text" placeholder='Send Message' value={input} onChange={handlechange}/>
      <button onClick={handlesubmit} className='bg-blue-400 hover:bg-blue-300 active:bg-blue-100 py-2 px-4 rounded-xl'><img className='invert' src={sendicon} alt="" /></button>
    </div>
    </div>
  )
}

export default Messageinput
