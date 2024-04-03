import React from 'react'
import GetContex from './Contex/GetContex'
import User from './Components/User'
import Students from './Components/Students'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavBar from './Components/NavBar'

const UseContextMain = () => {
  return (
    <>
     <GetContex>
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/student' element={ <Students/>}/>
    </Routes>
    </BrowserRouter>
    </GetContex>
    </>
  ) 
}

export default UseContextMain
