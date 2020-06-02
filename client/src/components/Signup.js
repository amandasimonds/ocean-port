import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert, Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import API from "../utils/API"

class Signup extends Component {
    constructor(props) {
        super()
    }

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
    validatePassword = () => {
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

    handleSignup = event => {
        event.preventDefault();
        console.log(this.state.email, this.state.password)
        if (this.state.email && this.state.password) {
            API.signup({
                email: this.state.email,
                password: this.state.password
            }).then(user => {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                    console.log("sign up success", user.data.user);
                    window.location.href = "/home";
            });
        }
    }

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
                <Jumbotron className="homePort" style={{padding: "2em"}}>
                    <h2 className="loginTitle">Sign Up</h2>
                    <hr />
                    <Form className="form-style">
                        <FormGroup>
                            <Label for="email"><h3>Email</h3></Label>
                            <Input className="form-style" type="email" name="email" id="email" 
                            placeholder="email@email.com" 
                            style={{ marginTop: ".5em" }}
                            value={this.email} 
                            onChange={this.handleInputChange} 
                            valid={this.state.validEmail} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password"><h3>Password</h3></Label>
                            <Input className="form-style" type="password" name="password" 
                            id="password" placeholder="password" 
                            style={{ marginTop: ".5em" }}
                            value={this.password} 
                            onChange={this.handleInputChange} 
                            valid={this.state.validPassword} />
                        </FormGroup>

                        <Button className="button" onClick={this.handleSignup} color="success">
                            Signup
                        </Button>

                        <Link to="/login">
                            <Button className="button" color="primary">
                                Log in
                            </Button>
                        </Link>
                    
                </Form>
                </Jumbotron>
            </div >
          
        );
    }
}

export default Signup;
