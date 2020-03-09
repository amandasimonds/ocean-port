import axios from "axios";

export default {
    login: function(loginInfo) {
      console.log("api login post", loginInfo)
        return axios.post("/api/login", loginInfo)
    },

    signup: function(signupInfo) {
        return axios.post("/api/signup", signupInfo)
    },

    isLoggedIn: function() {
        return axios.get("/api/home");
      },
    
      logout: function() {
        return axios.get("/api/logout")
      }
}