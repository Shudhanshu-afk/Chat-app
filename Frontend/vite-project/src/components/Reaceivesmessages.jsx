import React from 'react'
import { getTime } from '../utils/getTime.js';

const Receivedmessages = ({message}) => {
  const formattedTime = getTime(message.createdAt);
  return (
    <div className='flex  justify-start p-2 gap-3'>
       
        <div className='bg-gray-200 p-2 rounded-tl-lg rounded-br-lg rounded-tr-lg'>{message.message}</div>
        <div className=''>{formattedTime}</div>
    </div>
  )
}

export default Receivedmessages