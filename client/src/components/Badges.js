import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const Badges = (props) => {

// }
// export default class Badges extends React.Component{
    // render(props){
        return(
            <div>
{/* <h1>Welcome {props.state.email}</h1> */}
 <Row style={{justifyContent:'center'}}>
 <Card style={{ width: '18rem'}}>
  <Card.Body>

    {/*check the state of the user */}
    <Button onClick={props.checkState}>Check State</Button>

    <Card.Title>Shark Quiz</Card.Title>
    <Card.Text>
        
        {/* Score: <span className='score'>{this.state.sharkQuiz}</span>  */}
    </Card.Text>

    {/* button to simulate adding a badge to this card */}
    <Button variant="primary" onClick={props.addBadge}>Shark Badge</Button>

  </Card.Body>
</Card>
<Card style={{ width: '18rem'}}>
  <Card.Body>
    <Card.Title>Quiz 2</Card.Title>
    <Card.Text>
        
      Score: <span className='score'></span> 
    </Card.Text>
    <Button variant="primary">Back To Quiz</Button>

  </Card.Body>
</Card>
<Card style={{ width: '18rem'}}>
  <Card.Body>
    <Card.Title>Quiz 3</Card.Title>
    <Card.Text>
        
      Score: <span className='score'></span> 
    </Card.Text>
    <Button variant="primary">Back To Quiz</Button>

  </Card.Body>
</Card>
<Card style={{ width: '18rem'}}>
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
        )
    }
// }

export default Badges