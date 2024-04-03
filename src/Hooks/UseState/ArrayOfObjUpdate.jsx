import React, { useState } from "react";

const ArrayOfObjUpdate = () => {
  const ArrObj = [
    {
      name: "Rohit",
      place: "Kolkata",
    },
    {
      name: "Rajat",
      place: "Delhi",
    },
  ];
  const [data, setData] = useState(ArrObj);
  const clearData = () => {
    setData([]);
  };
  return (
    <>
      {data.map((data) => {
        return (
          <>
            <h2>name:{data.name}</h2>
            <h2>place:{data.place}</h2>
          </>
        );
      })}
      <button onClick={clearData}>Clear All</button>
    </>
  );
};

export default ArrayOfObjUpdate;
