import React, { Component } from "react";
import API from "../utils/API";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends Component {
  state = {
    isSharkBadge: false,
    isConservationBadge: false,
    isReefBadge: false,
    isMammalsBadge: false,
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

  checkState = event => {
    event.preventDefault();
    console.log(this.state)
  }

  handleLogin = event => {
    event.preventDefault();
    console.log("handle login", this.state.email, this.state.password)
    if (this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password
      }).then(user => {
          this.setState({
            loggedIn: true,
            user: user.data,
            // badges: "",
            // quizscore: "",
            // sharkBadge: true
          });
          console.log("log in success", user.data)
          console.log("usercontext state", this.state)
          window.location.href = "/home";
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
          this.setState({
            loggedIn:true,
            user: user.data.user
          });
          console.log("sign up success", user.data.user);
          window.location.href = "/";
      });
    }
  }

  isLoggedIn = () => {
    if (!this.state.loggedIn) {
      API.isLoggedIn().then(response => {
        if(response.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: response.data.user,
            isSharkBadge: response.data.user.sharkBadge,
            isConservationBadge: response.data.user.conservationBadge,
            isReefBadge: response.data.user.reefBadge,
            isMammalsBadge: response.data.user.mammalsBadge
          })
          console.log("logged in true", response)
        } else {
          console.log("logged in message", response.data.user)
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

  sharkBadge = (data) => { 
    console.log("shark badge", data.user.sharkBadge)
      API.sharkBadge({
        id: this.state.user.id,
        sharkBadge: true,
      }).then(user=> {
        console.log("add badge", user)
        this.setState({
          isSharkBadge: user.data.sharkBadge
        })
     })
  }

  conservationBadge = (data) => { 
    console.log("conservation badge", data.user.conservationBadge)
      API.conservationBadge({
        id: this.state.user.id,
        conservationBadge: true,
      }).then(user=> {
        console.log("add badge", user)
        this.setState({
          isConservationBadge: user.data.conservationBadge
        })
     })
  }

  mammalsBadge = (data) => { 
    console.log("mammals badge", data.user.mammalsBadge)
      API.mammalsBadge({
        id: this.state.user.id,
        mammalsBadge: true,
      }).then(user=> {
        console.log("add badge", user)
        this.setState({
          isMammalsBadge: user.data.mammalsBadge
        })
     })
  }

  reefBadge = (data) => { 
    console.log("add reef badge", data.user.reefBadge)
      API.reefBadge({
        id: this.state.user.id,
        reefBadge: true,
      }).then(user=> {
        console.log("add badge", user)
        this.setState({
          isReefBadge: user.data.reefBadge
        })
     })
  }

  render(){
    const contextValue = {
      data: this.state,
      inputChange: this.handleInputChange,
      handleLogin: this.handleLogin,
      handleSignup: this.handleSignup,
      logout: this.logout,
      sharkBadge: this.sharkBadge,
      conservationBadge: this.conservationBadge,
      reefBadge: this.reefBadge,
      mammalsBadge: this.mammalsBadge,
      checkState: this.checkState,
      isLoggedIn: this.isLoggedIn
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