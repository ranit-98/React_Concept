import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    const {id,name}=useParams()
  return (
    <>
    <h1>hello from hello page</h1>
    <h2>id is: {id}</h2>
    <h2>name is: {name}</h2>
    </>
  )
}

export default Hello
