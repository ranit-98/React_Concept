import React, { useContext } from 'react'
import { useUserContex } from '../Contex/UserContexProvider'

const User1 = () => {

    const {user}=useContext(useUserContex)

    console.log('ee',user);
  return (
    <div>
      <h1>User 1 Page</h1>
      {
        user?.map((item)=>{
            return(
                <>
                <h1> name is : {item.name}</h1>
                
                </>
            )

        })
      }
    </div>
  )
}

export default User1
