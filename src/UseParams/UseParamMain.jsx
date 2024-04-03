import React from 'react'
import UseParamNav from './UseParamNav'
import { BrowserRouter, Routes,Route, useParams } from 'react-router-dom'
import Hello from './Hello'
import Service from './Service'

const UseParamMain = () => {
    
  return (
   <>
   <BrowserRouter>
   <UseParamNav/>
   <Routes>
    <Route path="/Hello/:id/:name" element={<Hello/>}/>
    <Route path="/service/:id/:name" element={<Service/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default UseParamMain
