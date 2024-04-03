import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>  
          <ul className="navBar">
            <li><NavLink className="navBarLink" to="/about">About</NavLink><br></br></li>
            <li><NavLink className="navBarLink" to="/home">Home</NavLink><br></br></li>
            <li> <NavLink className="navBarLink" to="/">Main Page</NavLink></li>
          </ul>
    </>
  );
};

export default Nav;
