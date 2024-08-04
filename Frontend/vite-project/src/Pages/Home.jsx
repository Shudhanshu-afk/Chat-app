import React, { useState } from 'react'
import searchIcon from '../assets/search.svg'
import logoutlogo from '../assets/logoutlogo.svg'
import Sidebar from '../components/Sidebar'
import MessageContainer from '../components/MessageContainer'


const Home = () => {
    const [nochatsel, setnochatsel] = useState(true);
  
    return (
        <div className='h-screen w-screen bg-blue-400 flex items-center justify-center'>
            <div className='bg-white h-3/4 h-min-fit w-1/2 rounded-lg flex min-w-fit'>
                <Sidebar></Sidebar>
                <div className='w-3/5  rounded-tr-lg '>
                
                    
                    <div className='h-full'>
                    <MessageContainer></MessageContainer>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
