import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup"
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
function App() {

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BrowserRouter>
        <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login}  />
              <Route exact path="/signup" component={Signup}  />
              {/* <Route exact path="/profile" component={Profile} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
    </BrowserRouter>
  );
}

export default App;