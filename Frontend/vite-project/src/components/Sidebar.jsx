import React from 'react'
import searchIcon from '../assets/search.svg'
import logoutlogo from '../assets/logoutlogo.svg'
import getuserList from '../Hooks/getUserList.jsx'
import useConversation from '../ZUSTAND/useConversation.js'
import useLogout from '../Hooks/useLogout.js'


const Sidebar = () => {
    const {loading, userList} = getuserList();
    const {selectedConversation, setSelectedConversation} = useConversation();
    const [input, setinput] = React.useState('');
    
    const {logout} = useLogout();

    const handlechange = (e) => {
      
        setinput(e.target.value);
    }

    const search = () => {
        if (!loading) {
            
            const conversation = userList.filter((user) => user.username.toLowerCase() === input.toLowerCase);
            setSelectedConversation(conversation);
        }

    }
  return (
    
      <div className='w-2/5 h-full border-r'>
                    <div className='p-4  flex justify-center gap-5 items-center border-b'>
                        <input className='bg-gray-200 h-8 rounded-full p-2' type="text" onChange={handlechange} value={input} placeholder='Search...' />
                        <button onClick={search} className='bg-blue-500 p-2 rounded-full'><img src={searchIcon} alt="" /></button>

                    </div>

                    <div className='flex flex-col h-3/4 overflow-y-scroll p-4'>
                        <ul>
                            {userList.map((user)=>(
                                <li onClick={()=>{setSelectedConversation(user);}} key={user._id} className={selectedConversation && user._id == selectedConversation._id ?'px-4 py-2 flex items-center gap-6 bg-gray-300 hover:cursor-pointer  active:bg-gray-300':'px-4 py-2 flex items-center gap-6 hover:cursor-pointer  active:bg-gray-300'}> <img className='h-10' src={user.profilepic} alt="" /> <h1 className='text-xl'>{user.username}</h1></li>

                            ))}

                        </ul>
                    </div>
                    <div className='m-4'>
                        <button onClick={logout} className='flex gap-5 hover:bg-gray-200 active:bg-gray-400 p-2 rounded-lg'> <img className='h-6' src={logoutlogo} alt="" /> <h1>Logout</h1></button>

                    </div>

                </div>
    
  )
}

export default Sidebar
