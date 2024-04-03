import React, { useState,useEffect } from 'react'

const Timer = () => {
    const [countTime,setCountTime]=useState(0)
    useEffect(() => {
     setTimeout(() => {
        setCountTime((count)=>count+1)
     }, 1000);
    })
    
  return (
    <div>
        <h1>set time out example using useEffect Hooks</h1>
        <h1>count down:{countTime}</h1>
    </div>
  )
}

export default Timer
