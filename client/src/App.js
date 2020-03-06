import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoggedIn from "./components/LoggedIn";
import UserContext from "./utils/UserContext"
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
function App() {

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BrowserRouter>
     <UserContext.Provider>
        <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login}  />
              <Route exact path="/signup" component={Signup}  />
              <Route exact path="/loggedin" component={LoggedIn} />
              {/* <Route exact path="/profile" component={Profile} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;