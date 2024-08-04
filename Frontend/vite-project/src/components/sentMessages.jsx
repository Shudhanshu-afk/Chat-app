import React from 'react'
import { AuthContext } from '../Context/AuthContext'

const Sentmessages = ({value}) => {
  const {authuser} = React.useContext(AuthContext);
  return (
    <div className='flex  justify-end p-2 gap-3'>
        <div className='bg-blue-300 p-2 rounded-tl-lg rounded-bl-lg rounded-tr-lg'>{value.message}</div>
        <img className='h-10' src={authuser.user.profilepic} alt="" />
    </div>
  )
}

export default Sentmessages
