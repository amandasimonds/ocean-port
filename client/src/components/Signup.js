import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { Link } from "react-router-dom";

class Signup extends Component {
    state = {
        validEmail: false,
        validPassword: false,
        confirmPassword: false,
        password: "",
        passwordMessage: ""
    }

    componentDidMount() {
        console.log(this.props);
        this.validatePassword();
    }

    componentDidUpdate() {

        // functions to check the input fields, and update the state if they are valid
        this.confirmPassword();
        this.validatePassword();
        this.passwordMessage();
        this.validateEmail();
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    // uses regex to check is email is valid
    validateEmail = () => {
        let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let valid = validEmail.test(this.props.email);
        if (!this.state.validEmail && valid) {
            this.setState({
                validEmail: true
            });
        }
        if (this.state.validEmail && !valid) {
            this.setState({
                validEmail: false
            });
        }
    }

     // checks is password meets regex test (at least 8 letters, 1 capital and 1 number)
     validatePassword = ()=> {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    // checks if 2 password fields match
    confirmPassword = () => {
        if (!this.state.confirmPassword && this.state.password !== "" && this.state.password === this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.state.confirmPassword && this.state.password !== this.props.password) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    // displays the password message if it exists
    passwordMessage = () => {
        let message = "at least 8 letters, 1 capital & 1 number"
        if (this.props.password !== "" && !this.state.validPassword && this.state.passwordMessage !== message) {
            this.setState({
                passwordMessage: message
            });
        }
        if (this.state.validPassword && this.state.passwordMessage !== "") {
            this.setState({
                passwordMessage: ""
            });
        }
        if (this.state.passwordMessage === message && this.props.password === "") {
            this.setState({
                passwordMessage: ""
            });
        } 
    }

    render() {
        return (
            <div>
                <h2 className="loginTitle">Signup</h2>
                <hr />
                {this.props.message?(
                    <Alert type="danger">{this.props.message}</Alert>
                ): (
                    <p></p>
                )}
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="email@email.com" value={this.props.email} onChange={this.props.handleInputChange} valid={this.state.validEmail} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                        <FormText>{this.state.passwordMessage}</FormText>
                    </FormGroup>
                        <Button onClick={this.props.handleSignup} color="success" block>Signup</Button>
                    <p className="signupLink">
                        <Link to="/login">already have an account?  Sign in here</Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Signup;



////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button, Label } from 'reactstrap';
// import API from "../utils/API";

// function Signup() {

//   const [userState, setUserState] = useState({
//     email: "",
//     password:""
//   });

//  const handleInputChangeEmail = event => {
//     const{name, value}  =  event.target
//     setUserState({
//       email:value,
//       password: ""
//    });
//  }

//  const handleInputChangePassword = event => {
//   const{name, value}  =  event.target
//   setUserState({
//     email: userState.email,
//     password: value
//  });
// }

// const handleFormSubmit = event => {
//   event.preventDefault();

//   console.log(userState.email, userState.password)
//   let signupInfo = {
//     email: userState.email,
//     password: userState.password
//   }
//     API.signup(signupInfo).then(function(data){
//       console.log(data)
//     })
// };

//   return (
//     <div>
//     <div className="container">
//     <div className="row">
//       <div className="col-md-6 col-md-offset-3"></div>
//       <h1>Sign Up for a MyPort account</h1>
//       <form className="signup">
//           <div className="form-group">
//             <Label for="username">username</Label>
//             <input 
//               type="email" 
//               className="form-control" 
//               id="email-input" 
//               placeholder="username" 
//               name="email"
//               value={userState.email}
//               onChange={handleInputChangeEmail}
//               />

//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input 
//               type="password" 
//               className="form-control" 
//               id="password-input" 
//               placeholder="Password" 
//               value={userState.password}
//               name="password"
//               onChange={handleInputChangePassword}
//               />
//           </div>
//           <Button className="btn btn-default" onClick={handleFormSubmit}>Sign Up</Button>
//         </form>
//         <br />
//         <p className="loginLink"> <Link to="/login">already have an account? launch into myPort here!</Link></p>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
