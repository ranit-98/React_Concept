import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  console.log(props.data);
  return (
    <>
    <div className="container">
        <div className="row">
        {props?.data?.map((user) => {
        return (
          <>
            <div class="card col-md-4" style={{ width: "18rem",marginTop:"2rem" }}>
              <img src={user.avatar_url} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4>{user.type}</h4>
              <h5>{user.login}</h5>
              {/* <h6>node id: {user.node_id}</h6> */}
              <button type="button" class="btn btn-success"><Link to={`/user-details/${user.id}`} style={{TextDecoration:"none",color:"white"}}>View Details</Link></button>
              </div>
            </div>
          </>
        );
      })}
        </div>
    </div>
    
    </>
  );
};

export default User;
