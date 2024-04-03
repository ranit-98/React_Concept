import { useState } from "react";

export default function NameChangeUseState() {
  const names = "subir";

  const [myName, setMyname] = useState(names);
  
  const changeName = () => {
    setMyname("Sushmita");
  };

  return (
    <div>
      <h1>use State Hooks {myName}</h1>
      <button className="btn" onClick={changeName}>
        Click-me
      </button>
     
      
    </div>
  );

}
