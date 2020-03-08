import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quizes/Quizes"
import Learn from "./components/Learn/Learn"
import NavPort from "./components/Nav"
import Home from "./components/Home"
import SharkQuiz from "./components/Quizes/SharkQuiz/SharkWrap.js"
import SharkInfo from "./components/Learn/SharkInfo"
import UserProvider from "./utils/UserContext"
import Auth from "./pages/Auth"

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
              <Route exact path="/login" component={() => <Auth action="login" />}  />
              <Route exact path="/signup" component={Signup}  />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/learn" component={Learn} />
              <Route exact path="/sharkquiz" component={SharkQuiz} />
              <Route exact path="/sharkinfo" component={SharkInfo} />
            
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