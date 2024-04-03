import React from "react";

const Students = (props) => {
  return (
    <>
      <h1>Printing Array of Object using props</h1>
      <hr />
      <hr />
      {props.data?(props.data.map((student) => {
        return (
          <>
            <h2>Name: {student.Name}</h2>
            <h3>Address: {student.Address}</h3>
            <hr />
          </>
        );
      })):(<h2>data not found</h2>)}

     
      <h1>Printing Object using props</h1>
      <hr />
      <hr />
      <h2>Teacher name: {props.teacher}</h2>
      <hr />
     
     
      <h1>Calculation using jsx syntax</h1>
      <hr />
      <hr />
      <h3>Sum of 2 and 3 is: {2 + 3}</h3>
      <h3>Multiplication of 52 and 53 is: {52 * 53}</h3>
    </>
  );
};

export default Students;
