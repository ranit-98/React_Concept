import React from 'react'
import UserFetch from './UserFetch'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import UserDetails from './UserDetails'

const LoadingMain = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserFetch/>} />
      <Route path="/user-details/:id" element={<UserDetails/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default LoadingMain
