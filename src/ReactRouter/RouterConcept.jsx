import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Home from './Home'
const RouterConcept = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <h1>Welcome to Main Page</h1>
    </div>
  )
}

export default RouterConcept
