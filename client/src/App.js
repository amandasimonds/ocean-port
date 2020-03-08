import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quizes/Quizes"
import LoggedIn from "./components/LoggedIn";
import Learn from "./components/Learn/Learn"
import NavPort from "./components/Nav"
import Home from "./components/Home"
import SharkQuiz from "./components/Quizes/SharkQuiz/SharkWrap.js"
import UserProvider from "./utils/UserContext"

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
     <UserProvider>
        <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login}  />
              <Route exact path="/signup" component={Signup}  />
              <Route exact path="/loggedin" component={LoggedIn} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/learn" component={Learn} />
              <Route exact path="/sharkquiz" component={SharkQuiz} />
              


              {/* <Route exact path="/navbar" component={NavBar} /> */}
              {/* <Route exact path="/profile" component={Profile} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
      </UserProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;