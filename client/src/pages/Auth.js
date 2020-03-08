import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { UserConsumer } from '../utils/UserContext';

function Auth(props) {
  return (
    <UserConsumer>
      {({ data, inputChange, handleLogin, handleSignup }) => (
        <div className="authBox">
          {(props.action === "login") ? (
            <Login
              email={data.email}
              password={data.password}
              handleInputChange={inputChange}
              handleLogin={handleLogin}
            />
          ) : (
              <Signup
                email={data.email}
                password={data.password}
                handleInputChange={inputChange}
                handleSignup={handleSignup}
                message={data.failureMessage}
              />
            )}
        </div>
      )}
    </UserConsumer>
  );
}


export default Auth;