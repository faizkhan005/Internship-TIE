import React,{useState} from "react"
import "./login.css"

const background = new URL("../../images/background.png",import.meta.url);
const logo = new URL("../../images/MJT_logo.png",import.meta.url);
const Login = () =>{
    const [ user,setUser]=useState({
        email:"",
        password:""
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
        <div className="image">
          <img src={logo} alt="Image not found" ></img>
           
        </div>
        
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email"onChange={changeHandle}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password"onChange={changeHandle}></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
        
        </>

        
    )
    
}

export default Login