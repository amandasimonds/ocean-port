import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { UserConsumer } from "../utils/UserContext"
import {Text} from "reactstrap"

const Badges = () => {
  // }
  // export default class Badges extends React.Component{
  // render(props){
  return (
    <UserConsumer>
      {({ data, addBadge, isLoggedIn }) => (
        <div>
          {isLoggedIn}
          {/* <h1>Welcome {data.user.email}!</h1> */}
          <Row style={{ justifyContent: 'center', flexDirection: "row" }}>
            
            <Card style={{ 
              width: '18rem', 
              padding: ".3em", 
              justifyContent: 'center' }}>
              <Card.Body>
                {console.log("----------/n", data)}
                <Card.Title>Sharks</Card.Title>

                {data.isBadge ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/badge.png`}
                    alt="badge"
                    width="150px"
                    padding="10px">
                  </img>
                ) : ( 
                     <div><Button
                    variant="primary"
                    onClick={() => { addBadge(data) }}>
                    Click here to add your Shark Badge!
                  </Button></div> 
                   )}

              </Card.Body>
            </Card>

            <Card style={{ 
              width: '18rem', 
              padding: ".3em", 
              justifyContent: 'center' }}>
              <Card.Body>
                {console.log("----------/n", data)}
                <Card.Title>Conservation</Card.Title>

                {data.isBadge ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/badge.png`}
                    alt="badge"
                    width="150px"
                    padding="10px">
                  </img>
                ) : ( 
                     <div><Button
                    variant="primary"
                    style={{
                    width: "9em",
                  whiteSpace: "normal"}}
                    data-value="conservationBadge"
                    onClick={() => { addBadge(data) }}>
                      
                    Click here to add your Conservation Badge!
                    
                  </Button>
                  </div> 
                   )}

              </Card.Body>
            </Card>

          </Row>




        </div>
      )}
    </UserConsumer>
  )
}
// }

export default Badges