import React from 'react'
import CreateContex from './CreateContex'

const GetContex = ({children}) => {
    const user={
        name:"Ranit",
        email:"r@gmail.com"
    }
  return (
   <>
   <CreateContex.Provider value={user}>
    {children}
   </CreateContex.Provider>
   </>
  )
}

export default GetContex
