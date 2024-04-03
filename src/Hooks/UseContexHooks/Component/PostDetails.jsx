import React, { useContext, useEffect, useState } from 'react'
import { useUserContex } from '../Contex/UserContexProvider'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const PostDetails = () => {
    const{id}=useParams()
    const [postdetail, setPostDetails]=useState({})
//    const {postdetail}= useContext(useUserContex)
//    console.log(postdetail);
//    const getPostdetails = async () => {
//     const Url=`https://jsonplaceholder.typicode.com/posts/${id}`
//     const response = await axios.get(`${Url}`)
//     setPostDetails(response?.data)
// }

useEffect(() => {
 axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>setPostDetails(res.data))
  
}, [])
console.log(postdetail)
  return (
    <div>
      {postdetail.title}
    </div>
  )
}

export default PostDetails
