import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, Jumbotron } from 'reactstrap';

function Login(props) {
  return (
    <div>
      <Jumbotron
        style={{
          padding: "2em"
        }}  className="homePort">

        <Form className="form-style">
          <h2>Log in</h2>
          <hr></hr>
          <FormGroup>
            <Label for="email"><h3>Email</h3></Label>
            <Input
            className="form-style"
              type="text"
              name="email"
              id="email"
              placeholder="email"
              style={{ marginTop: ".5em" }}
              value={props.email}
              onChange={props.handleInputChange} />
          </FormGroup>
      
          <FormGroup>
            <Label for="password"><h3>Password</h3></Label>
            <Input
            className="form-style"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              style={{ marginTop: ".5em" }}
              value={props.password}
              onChange={props.handleInputChange} />
          </FormGroup>
          <br></br>
          <Button
            onClick={props.handleLogin}
            color="primary"
            className="button"
          >Login
          </Button>

          <Link to="/signup">
          <Button
            color="success"
            className="button">
              Dont have an account? Sign up here!
          </Button>
            </Link>

        </Form>
      </Jumbotron>
    </div>

  );
}

export default Login;
