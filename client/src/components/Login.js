import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Label } from 'reactstrap';
import UserContext from "../utils/UserContext"
import API from "../utils/API";

function Login() {

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
  let loginInfo = {
    email: userState.email,
    password: userState.password
  }
    API.login(loginInfo).then(function(data){
      console.log(data)
    })
};

  return (
    <UserContext.Provider value={userState}>
    <div>
    <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3"></div>
      <h1>Log In</h1>
      <form className="login">
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
          <Button className="btn btn-default" onClick={handleFormSubmit} Link to="/loggedin">Login</Button>
        </form>
        <br />
        <p className="signupLink"> <Link to="/signup">Don't have an account? Launch your account here!</Link></p>
      </div>
      </div>
    </div>
    </UserContext.Provider>
  );
};

export default Login;
