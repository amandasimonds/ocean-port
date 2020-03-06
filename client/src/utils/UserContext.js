import React from "react";
import API from "./API";
import Login from "../components/Login"
import {useState} from React;

const UserContext = React.createContext({
    email: "",
    password: "",
    loggedIn: false,
})

const [userState, setUserState] = useState({
    email: "",
    password:"",
    loggedIn: false,
  });


// reducer(state, action)
// switch(action)
//     case USER_LOGIN_ATTEMPT:
if (userState.email && userState.password) {
    API.login({
        email: userState.email,
        password: userState.password
    }).then(user=>{
        if (user.data.loggedIn) {
        console.log("hi")
        return {...state,
        loggedIn: true}
    }})
//     case default:
          return state;

}
export default UserContext;