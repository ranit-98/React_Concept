import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { useUserContex } from '../Contex/UserContexProvider'

const FetchUserDatas = () => {
    const {user}=useContext(useUserContex)
    //console.log(user);
   
  return (
    <>
      <h1>fetch User Data using useContex Hooks<Link to='/post'>Post</Link> |  <Link to='/aboutuser'>AboutUser</Link></h1>
      <hr></hr>
      <h1><Link to="/user">user</Link></h1>
      <h1><Link to="/user1">user 1</Link></h1>

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
                                               
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

    </>
  )
}

export default FetchUserDatas
