// import React, { useState } from "react";

// const ToggleNames = () => {
//   const [isFirstName, setIsFirstName] = useState(true);
  
//   const toggleName = () => {
//     setIsFirstName((prevIsFirstName) => !prevIsFirstName);
//   };


//   const FirstName = "Subir";
//   const SecondName = "Sushmita";

//   return (
//     <div>
//       <h1>{isFirstName ? FirstName : SecondName}</h1>
//       <button onClick={toggleName}>Toggle Name</button>
//     </div>
//   );
// };

// export default ToggleNames;
import React,{useState} from 'react'

export default function ToggleNames() {
    var [myName, setName]=useState('Raju kayal ')

    const changeData=()=>{
        var name= myName
        if(name=='Raju kayal'){
            setName('Aditi gupta')
        }
        else{
            setName('Raju kayal')
        }
        
        
    } 
console.log(myName);
  return (
    <div>
      <h1>how to crate toggle tada using useState hooks</h1>
      <h2>{myName}</h2>
      <button className='btn' onClick={changeData}>click me</button>
    </div>
  )
}
