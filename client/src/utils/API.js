import axios from "axios";

export default {
    login: function(loginInfo) {
        return axios.post("/api/users/login", loginInfo)
    },

    signup: function(signupInfo) {
        return axios.post("/api/signup", signupInfo)
    },

    isLoggedIn: function() {
        return axios.get("/api/users/profile");
      },
    
      logout: function() {
        return axios.get("/api/users/logout")
      }
}