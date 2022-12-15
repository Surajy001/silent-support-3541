/*import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const formstyle = {
    width: "25%",
    margin: "auto",
    marginTop: "15rem",
    // border: "1px solid ",
    padding: "20px",
    // paddnigBottom:"70px", //not working
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
  };
  
  const inputstyle = {
    width: "90%",
    marginTop: "0px",
    padding: "8px",
    fontSize: "16px",
    border:"1px solid",
  };

  const divs={
    marginTop:"1rem",
}

  const lables = {
    textAlign: "left"
  };
  
const Login = () => {

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser= JSON.parse(localStorage.getItem("user"));
       if(input.email===loggeduser.email && input.password===loggeduser.password){
        localStorage.setItem("loggedin" , true);
        navigate("/");
       }else{
        alert("Wrong Email or Password");
       }
        console.log(loggeduser);
      };

      const [input , setInput] = useState({
        email:"",
        password:""
      })
    
      const handleChange = (e) => {
        console.log(e.target);
        setInput({ ...input, [e.target.name]: e.target.value });
      };

  return (
    <div style={{}}>

      <form onSubmit={handleLogin} style={formstyle}>
        <div style={divs}> 
        <label style={lables}>
            <input
              style={inputstyle}
              type="email"
              name="email"
              placeholder="Enter Email"
              value={input.email}
              onChange={handleChange}
            />
          <p style={{ marginLeft: "10px", marginBottom: "2px" }}>Email</p>
          </label>
        </div>

        <div style={divs}>
        <label style={lables}>
            <input
              style={inputstyle}
              type="text"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
           <p style={{ marginLeft: "10px", marginBottom: "2px" }}>Password</p>
          </label>
        </div>

        <input
          style={{
            marginBottom: "20px",
            marginTop: "20px",
            width: "95%",
            padding: "8px",
            fontSize: "16px"
          }}
          type="submit"
          value="SUBMIT"
        />

        <div>
          <p>Don't have an account?
          <Link to="/register">Register Here</Link>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Login

