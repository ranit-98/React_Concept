import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import User from './User'
import NavBar from './NavBar'
  // Create a client
  const queryClient = new QueryClient()
  
const QueryRouting = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
     <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<User/>} />
        </Routes>
     </Router>
    </QueryClientProvider>
    </>
  )
}

export default QueryRouting
