import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function Login(props) {
  return (
    <div>
      <h2>Log in</h2>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" placeholder="email" value={props.email} onChange={props.handleInputChange} />
        </FormGroup>

        <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                </FormGroup>
                <Button onClick={props.handleLogin} color="primary" block>Login</Button>
                <p className="signupLink">
                    <Link to="/signup">dont have an account?  Sign up here</Link>
                    </p>
      </Form>
    </div>

  );
}

export default Login;
