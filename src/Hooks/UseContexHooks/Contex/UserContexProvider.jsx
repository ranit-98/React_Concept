import axios from 'axios'
import React, { useState, useEffect, createContext } from 'react'

export const useUserContex = createContext()

export const UserContexProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [post, setPost]=useState([])
  
    //get User data
    const getUser = async () => {
        const BaseUrl='https://jsonplaceholder.typicode.com'
        const response = await axios.get(`${BaseUrl}/users`)
        setUser(response?.data)
    }
    const getPost = async () => {
        const Url='https://jsonplaceholder.typicode.com'
        const response = await axios.get(`${Url}/posts`)
        setPost(response?.data)
    }
   
    useEffect(() => {
        getPost()  
        getUser()
     
    }, [])
    
    const AllApi={user,post,}
    
    return (
        <useUserContex.Provider value={AllApi}>
            {children}
        </useUserContex.Provider>

    )
}


