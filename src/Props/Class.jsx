import React from "react";
import Students from "./Students";

const Class = () => {
  const studentData = [{
    Name:"Ram",
    Address:"Ayodhya"
  }, {
    Name:"Shyam",
    Address:"Vrindaban"
  },{
    Name:"Arjuna",
    Address:"Indraprasta"
  },{
    Name:"Ram Krishna",
    Address:"Kamarpukur"
  }];

  const teacherName="Dronacharya"
  return <>
    <Students data={studentData} teacher={teacherName}/>
  
  </>;
};

export default Class;
