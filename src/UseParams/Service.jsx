import React from 'react'
import { useParams } from 'react-router-dom'

const Service = () => {
 const {id,name}=useParams()
  return (
    <>
    <h1>Hello from service page</h1>
    <h2>id is: {id}</h2>
    <h2>name is: {name}</h2>
    </>
  )
}

export default Service
