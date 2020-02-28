import React from "react";
import Login from "./components/Login";
import { useState } from "react";
function App() {

  const [userState, setUserState] = useState({
    email: "",
    password: "",
    redirect: null
  });

  const { email, password, redirect } = userState;

  const handleInputChange = e => {
    const { email, value } = e.target;
    setUserState({ ...userState, [email]: value })
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
        <Login />
    </div>
  );
}

export default App;