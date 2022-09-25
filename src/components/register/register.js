import React ,{useState}from "react"
import "./register.css"
const logo = new URL("../../images/MJT_logo.png",import.meta.url);
const Register = () =>{

    const [ user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        repass:""
    })

    const changeHandle = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    return(
        <>
        
        <div className="image" alt="Image not found">
          <img src={logo}></img>
           
        </div>
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ changeHandle}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ changeHandle}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ changeHandle}></input>
            <input type="password" name="repass" value={user.repass} placeholder="Re-enter Password" onChange={ changeHandle}></input>
            <div className="button">Register</div>
        </div>
        </>
    )
}

export default Register