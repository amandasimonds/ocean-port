import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Label } from 'reactstrap';
import API from "../utils/API";

function Signup() {

  const [userState, setUserState] = useState({
    email: "",
    password:""
  });

const [search, setSearch] = useState("");

 const handleInputChangeEmail = event => {
    const{name, value}  =  event.target
    setUserState({
      email:value,
      password: ""
   });
 }

 const handleInputChangePassword = event => {
  const{name, value}  =  event.target
  setUserState({
    email: userState.email,
    password: value
 });
}

const handleFormSubmit = event => {
  event.preventDefault();

  console.log(userState.email, userState.password)
  let signupInfo = {
    email: userState.email,
    password: userState.password
  }
    API.signup(signupInfo).then(function(data){
      console.log(data)
    })
};

  return (
    <div>
    <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3"></div>
      <h1>Sign Up for a MyPort account</h1>
      <form className="signup">
          <div className="form-group">
            <Label for="username">username</Label>
            <input 
              type="email" 
              className="form-control" 
              id="email-input" 
              placeholder="username" 
              name="email"
              value={userState.email}
              onChange={handleInputChangeEmail}
              />

            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password-input" 
              placeholder="Password" 
              value={userState.password}
              name="password"
              onChange={handleInputChangePassword}
              />
          </div>
          <Button className="btn btn-default" onClick={handleFormSubmit} Link to="/signup">Sign Up</Button>
        </form>
        <br />
        <p className="loginLink"> <Link to="/login">already have an account? launch into myPort here!</Link></p>
      </div>
      </div>
    </div>
  );
};

export default Signup;
