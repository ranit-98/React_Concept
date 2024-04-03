import React, { useContext } from 'react'
import CreateContex from '../Contex/CreateContex'

const User = () => {
    const users=useContext(CreateContex)
  return (
    <div>
      <h1>Hello from User page</h1>
      <h2>{users.name}</h2>
      <h2>{users.email}</h2>
    </div>
  )
}

export default User
