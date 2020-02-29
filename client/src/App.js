import React from "react";
import Login from "./components/Login";
import { BrowserRouter } from "react-router-dom";
function App() {

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BrowserRouter>
        <Login />
    </BrowserRouter>
  );
}

export default App;