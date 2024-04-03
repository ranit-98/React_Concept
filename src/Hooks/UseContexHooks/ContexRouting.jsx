import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import FetchUserDatas from './Component/FetchUserDatas'
import FetcUser1 from './Component/FetcUser1'
import { UserContexProvider } from './Contex/UserContexProvider'
import Post from './Component/Post'
import PostDetails from './Component/PostDetails'
import User from './Component/User'
import User1 from './Component/User1'




const ContexRouting = () => {
  return (
    <>
      <Router>
        <UserContexProvider>
        <Routes>
            <Route path='/' element={<FetchUserDatas/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/user1' element={<User1/>}/>
            <Route path='/aboutuser'  element={<FetcUser1/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/postdetail/:id' element={<PostDetails/>}/>
          
        </Routes>
        </UserContexProvider>
      </Router>
    </>
  )
}

export default ContexRouting
