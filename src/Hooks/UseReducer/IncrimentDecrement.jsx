import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

const IncrimentDecrement = () => {
  const initialState=1
  const reducer=(state,action)=>{
    switch(action.type){
      case "increment":
        return state+1
      case "decrement":
        return state-1
      case "multiply":
        return state*2
      default:
        throw new Error()
      }
  }
  const [state,dispach]=useReducer(reducer,initialState)
 

  return (
    <>
      <h1>{state}</h1>
      <button onClick={(()=>dispach({type:"increment"}))}  >Increment</button>
      <button onClick={(()=>dispach({type:"decrement"}))}  >Decrement</button>
      <button onClick={(()=>dispach({type:"multiply"}))}  >Multiply</button>
    </>
    
  )
}

export default IncrimentDecrement

