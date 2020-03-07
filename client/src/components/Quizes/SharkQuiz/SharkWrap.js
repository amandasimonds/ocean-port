import React from 'react';
import './style.css';
import { Button } from 'reactstrap';
import Question from './Question'
const QUESTIONS = [
    {
        'question': 'What is your name?',
        'choices': ["kalyan", "kalchuk", "gadda", "kamaraj"],
        'correctAnswer': "kalyan"
    },
    {
        'question': 'What is your city?',
        'choices': ["Hyd", "Ban", "CHE", "CBE"],
        'correctAnswer': "Hyd"
    }
]
let selectedQuestion = QUESTIONS[0];
function bindQuestions() {
    console.error('dadad')
    selectedQuestion = QUESTIONS[1]
}
bindQuestions();
class SharkWrap extends React.Component {
    constructor() {
        super();
        this.state = {
            question : ["question 1", "q 2"]}
    }
    
    handleChange = (e) => {
        this.setState({question: QUESTIONS[0]});
        document.getElementById("questionDiv").style.display = 'block';
        document.getElementById("startDiv").style.display = 'none';
    }
    render() {
        return (
            <div className="App">
                <div>
                    <div className="title-div">
                        <span className="quiz-title">Coding Quiz</span>
                    </div>
                    <p className="details">As a coding bootcamp student,</p>
                    <span className="time-style">Time Remaining: 0</span>
                    <div id="startDiv">
                        <Button variant="primary" onClick={this.handleChange}>Start Quiz</Button>
                        &nbsp;&nbsp;
                        <Button variant="secondary">View High Scores</Button>
                    </div>
                    <div className="display-none" id="questionDiv">
                        <Question question={this.state.question}></Question>
                    </div>
                </div>
            </div>
        );
    }
}
export default SharkWrap;