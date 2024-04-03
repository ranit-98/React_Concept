import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

const UserFetch = () => {
    const [user,setUser]=useState()
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    const getUser=async()=>{
        try{
        const response=await axios.get(`https://api.github.com/users`)
        setUser(response.data)
        setIsLoading(false)
    
        }catch(error){
            setError(error)
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        getUser()
    },[])
   // console.log(user);
  return (
    <>
    {isLoading && <h1>Loading.....</h1>}
    {error && <h1>{error.message}</h1>}
    <User data={user}/>
    </>
  )
}

export default UserFetch
