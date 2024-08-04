import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { AuthContext } from './Context/AuthContext'
import { Toaster } from 'react-hot-toast'

function App() {
  const {authuser} = useContext(AuthContext);

  return (
    <>
      <Toaster position="top-right"
  reverseOrder={false} />
    <Router>
      <Routes>
        <Route path='/signup' element={authuser? <Navigate  to={'/home'}/> : <Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={authuser? <Home/> : <Signup/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
