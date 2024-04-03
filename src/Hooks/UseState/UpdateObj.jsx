import React, { useState } from "react";

const UpdateObj = () => {
  const user = {
    name: "Pritam",
    email: "P@gmail.com",
    phone: 123456,
  };
  const [userObj, setUserObj] = useState(user);
  const changeEmail=()=>{
    setUserObj({
      ...userObj,
      email:"q@gmail.com",
      phone:56789
    })
  }
  return (
    <>
    
      <h2>Name: {userObj.name}</h2>
      <h2>Email: {userObj.email}</h2>
      <h2>Phone: {userObj.phone}</h2>
      <button onClick={changeEmail}>ChangeState</button>
    </>
  );
};

export default UpdateObj;
