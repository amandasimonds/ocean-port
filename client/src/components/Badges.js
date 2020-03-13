import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { UserConsumer } from "../utils/UserContext"

const Badges = () => {
  // }
  // export default class Badges extends React.Component{
  // render(props){
  return (
    <UserConsumer>
      {({ data, addBadge, checkState, isLoggedIn }) => (
        <div>
          {isLoggedIn}
          {/* <h1>Welcome {data.user.email}!</h1> */}
          <Row style={{ justifyContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                {console.log("----------/n",data)}
                {/*check the state of the user */}
                <Button onClick={checkState}>Check State</Button>

                <Card.Title>Shark Quiz</Card.Title>
                <Card.Text>

                  {/* Score: <span className='score'>{this.state.sharkQuiz}</span>  */}
                </Card.Text>

                {/* button to simulate adding a badge to this card */}
                <Button variant="primary" onClick={()=>{ addBadge(data)  } }>Shark Badge...</Button>

                {data.isBadge ? (
                  <h2>YOU OWN SHARK BADGES!</h2>
                ): (
                <div></div>)}

              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Quiz 4</Card.Title>
                <Card.Text>

                  Score: <span className='score'></span>
                </Card.Text>
                <Button variant="primary">Back To Quiz</Button>

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