import React, { useContext } from 'react'
import { useUserContex } from '../Contex/UserContexProvider'
import { Link } from 'react-router-dom';


const Post = () => {
    const {post}=useContext(useUserContex)
    console.log(post);
  return (
    <div>
    <h1>fetch User Data using useContex Hooks Post Page </h1>
   <hr></hr>
   <div className="container">
              <div className="row">
                  {
                      post?.map((posts, index) => {
                          return (
                              <>
                                  <div className="col-md-4">
                                      <div class="card" style={{ width: "18rem" }}>
                                          <div class="card-body">
                                              <h5 class="card-title">Name {posts.title}</h5>
                                              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                              <p class="card-text"> {posts.body}</p>
                                             <Link to={`/postdetail/${posts.id}`}>post details</Link>
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

export default Post
