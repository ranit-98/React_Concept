import React, { useContext } from 'react'
import { useUserContex } from '../Contex/UserContexProvider'


const User = () => {
    const {user}=useContext(useUserContex)
    console.log(user);
  return (
    <div>
     {
        user.map((item)=>{
            return(
                <>
                <h1>{item.name}</h1>
                </>
            )
        })
     }
    </div>
  )
}

export default User
