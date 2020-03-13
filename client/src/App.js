import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MammalsInfo from "./components/Learn/MammalsInfo";
import MammalsQuiz from "./components/Quizes/MammalsQuiz/MammalsWrap.js";
import SharkQuiz from "./components/Quizes/SharkQuiz/SharkWrap.js";
import SharkInfo from "./components/Learn/SharkInfo";
import ReefFishQuiz from "./components/Quizes/ReefFishQuiz/ReefFishWrap.js";
import ReefFishInfo from "./components/Learn/ReefFishInfo";
import ConservationQuiz from "./components/Quizes/ConservationQuiz/ConservationWrap.js";
import ConservationInfo from "./components/Learn/ConservationInfo";
import Quiz from "./components/Quizes/Quizes"
import SharkWrap from "./components/Quizes/SharkQuiz/SharkWrap.js"
import Learn from "./components/Learn/Learn"
import NavPort from "./components/Nav"
import Home from "./components/Home"
import UserProvider from "./utils/UserContext"
import Auth from "./pages/Auth"
import Badges from './components/Badges'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css"
function App(props) {

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const user = props.user

  console.log("app", user)
  
  return (
    <div className="homePort">
      <NavPort name="" name1="Tyson"/>
    <BrowserRouter>
     <UserProvider>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={() => <Auth action="login" />}  />
              <Route exact path="/signup" component={() => <Auth action="signup" />}  />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/api/users/unauthorized" component={Home} />
              <Route exact path="/learn" component={Learn} />
              <Route exact path="/sharkquiz" component={SharkQuiz} />
              <Route exact path="/sharkinfo" component={SharkInfo} />
              <Route exact path="/mammalsinfo" component={MammalsInfo} />
              <Route exact path="/mammalsquiz" component={MammalsQuiz} />
              <Route exact path="/reeffishinfo" component={ReefFishInfo} />
              <Route exact path="/reeffishquiz" component={ReefFishQuiz} />
              <Route exact path="/conservationinfo" component={ConservationInfo} />
              <Route exact path="/conservationquiz" component={ConservationQuiz} />
              <Route exact path="/Badges" component={Badges} />
              {/* <Route exact path="/navbar" component={NavBar} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
      </UserProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;