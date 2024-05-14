import React, { memo, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [todos,setTodo]=useState("ranit")
    const [count,setCount]=useState(0)
    const handleclick=()=>{
         setCount(count+1)
    }
    console.log("parent");
    console.log(count);
  return (
    <>
    <Child data={todos} />
    <h1>Hello from Parent</h1>
    <button onClick={handleclick} >click me</button>
    </>
  )
}

export default Parent
