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
      {({ data, isLoggedIn, conservationBadge, sharkBadge, reefBadge, mammalsBadge }) => (
        <div>
          {isLoggedIn}
          <Row style={{ justifyContent: 'center', flexDirection: "row" }}>
            
            <Card style={{ 
              width: '18rem', 
              padding: ".1em", 
              margin: ".3em",
              height: "14em",
              justifyContent: 'center' }}>
              <Card.Body>
                {console.log("----------/n", data)}
                <Card.Title className="badge-title">Sharks</Card.Title>
                {data.isSharkBadge ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/shark.png`}
                    alt="badge"
                    style={{width: "120px"}}>
                  </img>
                ) : ( 
                     <div><Button
                    variant="primary"
                    style={{whiteSpace: "normal"}}
                    onClick={() => { sharkBadge(data) }}
                    className="badge-button">
                    Did you finish the quiz and learning page? Click here to add your Shark Badge!
                  </Button></div> 
                   )}
              </Card.Body>
            </Card>

            <Card style={{ 
              width: '18rem', 
              padding: ".1em", 
              margin: ".3em",
              justifyContent: 'center' }}
              >
              <Card.Body>
                <Card.Title className="badge-title">Conservation</Card.Title>
                {data.isConservationBadge ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/conservationbadge.png`}
                    alt="badge"
                    style={{width: "120px"}}>
                  </img>
                ) : ( 
                     <div><Button
                    variant="primary"
                    style={{whiteSpace: "normal"}}
                    onClick={() => { conservationBadge(data) }}
                    className="badge-button">
                      Did you finish the quiz and learning page? Click here to add your Conservation Badge!
                  </Button>
                  </div> 
                   )}
              </Card.Body>
            </Card>

            <Card style={{ 
              width: '18rem', 
              padding: ".1em", 
              margin: ".3em",
              justifyContent: 'center' }}>
              <Card.Body>
                <Card.Title className="badge-title">Reef</Card.Title>
                {data.isReefBadge ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/reef.svg`}
                    alt="badge"
                    style={{width: "120px"}}>
                  </img>
                ) : ( 
                     <div><Button
                    variant="primary"
                    style={{whiteSpace: "normal"}}
                    onClick={() => { reefBadge(data) }}
                    className="badge-button">
                      
                      Did you finish the quiz and learning page? Click here to add your Reef Badge!
                    
                  </Button>
                  </div> 
                   )}

              </Card.Body>
            </Card>

            <Card style={{ 
              width: '18rem', 
              padding: ".1em", 
              margin: ".3em",
              justifyContent: 'center' }}>
              <Card.Body>
                <Card.Title className="badge-title">Mammals</Card.Title>

                {data.isMammalsBadge ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/mammalsbadge.jpg`}
                    alt="badge"
                    style={{width: "120px"}}>
                  </img>
                ) : ( 
                     <div><Button
                    variant="primary"
                    style={{whiteSpace: "normal"}}
                    onClick={() => { mammalsBadge(data) }}
                    className="badge-button">
                      
                      Did you finish the quiz and learning page? Click here to add your Mammals Badge!
                    
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