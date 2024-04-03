import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
    const initialstate = {
        name: "",
        email: "",
        city: "",
        phone: "",
        photo: ""
    }
    const [user, setUser] = useState(initialstate)
    const [img, setimg] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(user);
    }

    const onSubmits=(data)=>{
        data.preventDefault()
        const apiUrl = "https://tureappservar.onrender.com/user";
        let formdata=new FormData()
            formdata.append("name",user.name)
           formdata.append("city",user.city)
           formdata.append("email",user.email)
           formdata.append("phone",user.phone)
           formdata.append("photo",img)
       const adddata= axios.post(apiUrl, formdata).
       then((res)=>{
       console.log(res?.data.message);
       if(adddata){
        toast.success(res?.data.message)
       }}).catch((error)=>{
        toast.error(error.message)
       })
       setUser(initialstate)
    }

    return (
        <>
         <ToastContainer />
            <h1>Add user</h1>

            <div className="container" style={{border:"1px solid black",width:"50%", background: "linear-gradient(to right, #00b4db, #0083b0)"}}>
                <form onSubmit={onSubmits} method='post' style={{margin:"1rem"}}>
                    <div className="form-group">
                        <label for="exampleInputEmail1" style={{fontSize:"22px",fontWeight:"bold",color:"white"}}>Name</label>
                        <input type="text" name='name' className="form-control"
                            onChange={handleChange}
                            value={user.name}
                        />

                    </div>


                    <div class="form-group">
                        <label for="exampleInputEmail1" style={{fontSize:"22px",fontWeight:"bold",color:"white"}}>Email</label>
                        <input type="email" class="form-control" name='email'
                            onChange={handleChange}
                            value={user.email}
                        />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{fontSize:"22px",fontWeight:"bold" ,color:"white" }}>Phone</label>
                        <input type="text" class="form-control" name='phone'
                            onChange={handleChange}
                            value={user.phone}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{fontSize:"22px",fontWeight:"bold",color:"white" }}>City</label>
                        <input type="text" class="form-control" name='city'
                            onChange={handleChange}
                            value={user.city}
                        />
                    </div>
                    
                    <div className="form-group">
                                <label for="exampleInputEmail1" style={{fontSize:"22px",fontWeight:"bold",color:"white"}}>photo</label>
                                <input
                                    type="file"
                                    onChange={(e) => setimg(e.target.files[0])}
                                    name="img"
                                    accept="image/*"
                                    class="form-control"
                                />
                                {img !== "" && img !== undefined && img !== null ? (
                                    <img
                                        style={{ height: "180px" }}
                                        src={URL.createObjectURL(img)}
                                        alt=""
                                        className="upload-img"
                                    />
                                ) : (
                                    <>{img === "" && <p>Drag or drop content here</p>}</>
                                )}
                            </div>

                    <button type="submit" class="btn btn-success">Add USer</button>
                </form>
            </div>

        </>
    )
}

export default AddUser
