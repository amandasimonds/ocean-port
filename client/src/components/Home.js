import React from 'react';
import { UserConsumer } from "../utils/UserContext"
import { Jumbotron, Button } from 'reactstrap';
import  API from "../utils/API"
import { Link } from "react-router-dom"
import "../styles/Home.css"

const Home = (props) => {
  
  return (
    <UserConsumer>
      {({ data, logout }) => (
        
        <div>
          
          {(data.loggedIn) ? (

            //if they are logged in, show this page
            <Jumbotron style={{padding: "4em" }} className="homePort">
              <p className="lead">
              </p>
              <h1 className="display-3">Hello, welcome to OceanPort, {data.user.email}!</h1>
              <p className="lead">Go to the Navigation Bar at the top to learn about the ocean, take quizes, and add and view your badges!</p>
              <hr className="my-2" />
              <p className="lead">
                <Button color="primary" className="button"
                style={{margin: "1em", padding: "1em", borderRadius: "1em"}}
                onClick={logout}>Logout</Button>
              </p>
              
            </Jumbotron>

          ) : (

            //if user is not logged in, show this:
              <Jumbotron
              style={{padding: "4em" }} className="homePort">

                <h1 className="display-3">Hello, welcome to OceanPort!</h1>

                <Link to="/login">
                  <Button color="primary" className="button">
                  Log in
                  </Button></Link>

                  <Link to="/signup">
                    <Button color="success" className="button">
                      Don't have an account? Click here to sign up!
                      </Button></Link>
                  
              </Jumbotron>
                

            )}
        </div>
      )}
    </UserConsumer>
  );
};

export default Home;