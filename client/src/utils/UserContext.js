import React, { Component } from "react";
import API from "../utils/API";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
    user: null,
  }

  componentDidMount(){
    this.isLoggedIn();
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    console.log("handle login", this.state.email, this.state.password)
    if (this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password
      }).then(user => {
       // if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data,
            badges: "",
            quizscore: ""
          });
          console.log("log in success", user.data)
          console.log("usercontext state", this.state)
          window.location.href = "/home";
        // } else {
        //   console.log("something went wrong", user)
        // }
      });
    }
  }

  handleSignup = event => {
    event.preventDefault();
    console.log(this.state.email, this.state.password)
    if (this.state.email && this.state.password) {
      API.signup({
        email: this.state.email,
        password: this.state.password
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn:true,
            user: user.data.user
          });
          console.log("sign up success", user.data.user);
          window.location.href = "/home";
        } else {
          console.log("something went wrong with sign up", user.data);
          this.setState({
            failureMessage: user.data
          })
        }
      });
    }
  }

  isLoggedIn = () => {
    if (!this.state.loggedIn) {
      API.isLoggedIn().then(user => {
        if(user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          })
          console.log("logged in true", user)
        } else {
          console.log("logged in message", user.data.user)
          // console.log("logged in message", user.data.message)
        }
      })
    }
  }

  logout = () => {
    if (this.state.loggedIn) {
      API.logout().then(()=> {
        console.log("logged out success")
        this.setState({
          loggedIn:false,
          user: null
        })
      })
    }
  }

  addBadge = (event) => {
    event.preventDefault();
    console.log("addBadge", this.state)
      API.addBadge({
        id: this.state.user.id,
        sharkBadge: true,
      }).then(user=> {
        this.setState({
          email: this.state.email,
          loggedIn: true,
          sharkBadge: true,
          sharkQuiz: 100,
        })
        console.log("addbadge user", this.state)
      })
  }

  render(){
    const contextValue = {
      data: this.state,
      inputChange: this.handleInputChange,
      handleLogin: this.handleLogin,
      handleSignup: this.handleSignup,
      logout: this.logout,
      addBadge: this.addBadge
    }
    return (
      <UserContext.Provider value = {
        contextValue
      }>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider