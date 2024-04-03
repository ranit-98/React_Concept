import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);


  const increaseNum=()=>{
    count<20?setCount(count + 1):setCount(0)
  }
  const decreaseNum = () => {
    count>0?setCount(count - 1):setCount(20)
  };



  return (
    <>
      <h1>useState in React {count}</h1>
      <button onClick={increaseNum}>Update Counter</button>

      <button onClick={decreaseNum}>decrese Counter</button>
    </>
  );
}

export default Counter;
