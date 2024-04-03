import axios from "axios";
import React, { useState } from "react";

const PostReq = () => {
  const data = { fname: "", lname: "" };
  const [inputData, setInputData] = useState(data);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    axios.post(`https://jsonplaceholder.typicode.com/users`,inputData)
    .then((res)=>{
      console.log(res);
    })
    setInputData(data);
  };
  return (
    <>
      <h1>Axios Post Request</h1>
      <label>
        <h2>First Name: </h2>
      </label>
      <input
        type="text"
        name="fname"
        value={inputData.fname}
        onChange={handleData}
      />
      <br />
      <label>
        <h2>Last Name: </h2>
      </label>
      <input
        type="text"
        name="lname"
        value={inputData.lname}
        onChange={handleData}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default PostReq;
