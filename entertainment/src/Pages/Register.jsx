import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
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
  border: "1px solid"
};

const lables = {
  textAlign: "left"
};

const divs={
    marginTop:"1rem",
}

function Register() {

     //to store value in localstorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login");
    //console.log(input);
  };

  const navigate = useNavigate()


  const [input , setInput] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    //console.log(e.target);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div style={{}}>

      <form onSubmit={handleSubmit} style={formstyle}>
        <div style={divs}>
          <label style={lables}>
            <input
              style={inputstyle}
              type="text"
              name="name"
              placeholder="Enter Name"
              value={input.name}
              onChange={handleChange}
            />
          <p style={{ marginLeft: "10px", marginBottom: "2px"}}>Name</p>
          </label>
        </div>

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
          <p>Have already an account?
          <Link to="/login">Login Here</Link>
          </p>
        </div>

      </form>
    </div>
  );
}

export default Register;

