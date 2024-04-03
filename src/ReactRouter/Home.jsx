import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
    const navToPage=(url)=>{
            navigate(url)
    }
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Suscipit itaque dolorem rerum illum ad tempore quod
        placeat, esse iste. Itaque, eius voluptatem. Labore doloribus
        reprehenderit laboriosam ducimus porro, facilis atque.
      </p>

      <button onClick={()=>navToPage("/about")} style={{margin:'20px'}}>About</button>
      <button onClick={()=>navToPage('/')}>Main Page</button>
    </>
  );
};

export default Home;
