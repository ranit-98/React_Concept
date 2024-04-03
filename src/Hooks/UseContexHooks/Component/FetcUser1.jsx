import React,{useContext} from 'react'
import { useUserContex } from '../Contex/UserContexProvider'




const FetcUser1 = () => {
  const {user}=useContext(useUserContex)

  return (
    <div>
      <h1>fetch User Data using useContex Hooks About Page </h1>
     <hr></hr>
     <div className="container">
                <div className="row">
                    {
                        user?.map((users, index) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div class="card" style={{ width: "18rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title">Name {users.name}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="card-link">Address: {users.address.city}</a>
                                                <hr/>
                                               <p></p>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
    </div>
  )
}

export default FetcUser1
