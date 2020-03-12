import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default class Badges extends React.Component{
    render(props){
        return(
            <div>
            
 <Row style={{justifyContent:'center'}}>
 <Card style={{ width: '18rem'}}>
  <Card.Body>
    <Card.Title>Quiz 1</Card.Title>
    <Card.Text>
        
      Score: <span className='score'></span> 
    </Card.Text>
    <Button variant="primary">Back To Quiz</Button>
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
}