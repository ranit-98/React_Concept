import React, { useContext } from 'react'
import CreateContex from '../Contex/CreateContex'

const Students = () => {
    const std=useContext(CreateContex)
  return (
    <div>
      <h1>Hello from student page</h1>
    <h2>{std.name}</h2>
    <h2>{std.email}</h2>
    </div>
  )
}

export default Students
