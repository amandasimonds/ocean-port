import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoggedIn from "./components/LoggedIn"
import Quiz from "./components/Quizes"
import Home from "./components/Home"
import Learn from "./components/Learn"
import NavPort from "./components/Nav"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import "./App.css"
function App() {

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="homePort">
      <NavPort name="" name1="Tyson"/>
    <BrowserRouter>
        <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login}  />
              <Route exact path="/signup" component={Signup}  />
              <Route exact path="/loggedin" component={LoggedIn} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/learn" component={Learn} />
              

              {/* <Route exact path="/navbar" component={NavBar} /> */}
              {/* <Route exact path="/profile" component={Profile} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;