import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Question from './Question';
import quizQuestions from './quizQuestions.js';

const QUESTIONS = quizQuestions;
const YES = "yes";
const NO = "no";

class ConservationWrap extends React.Component {

    constructor() {
        super();
        this.state = { question: {}, counter: 0, seconds: 0, start: true, isCorrect: null, score: 0}
        this.quizInterval = null
    }

    clear() {
        clearInterval(this.quizInterval)
    }

    setStart() {
        this.setState({start: true})
        this.setState({seconds: 0})
    }

    setStop() {
        this.setState({start: false})
        this.setState({seconds: 0})
    }

    startTimer() {
        setInterval(() => {
            if (this.state.start) {
                this.quizInterval = this.setState(({seconds}) => ({
                    seconds: seconds + 1
                }))
                if (this.state.seconds === 60) {
                    this.setStop();
                    document.getElementById("timeupDiv").style.display = 'block';
                    document.getElementById("questionDiv").style.display = 'none';
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        this.clear();
    }

    handleChange = (e) => {
        this.setState({question: QUESTIONS[this.state.counter]});
        this.setStart();
        this.startTimer();
        document.getElementById("questionDiv").style.display = 'block';
        document.getElementById("startDiv").style.display = 'none';
    }

    validateAnswer = (choice) => {
        if (choice.type === 'right') {
            this.setState({isCorrect: YES})
            this.setState({score: this.state.score + 10})
        } else {
            this.setState({isCorrect: NO})
        }
    }

    loadQuestions = (e) => {
        let counter = this.state.counter;
        counter++;
        if (QUESTIONS.length - 1 >= counter) {
            this.setState({counter: counter});
            this.setState({question: QUESTIONS[counter]});
        } else {
            this.setStop();
            document.getElementById("finalDiv").style.display = 'block';
            document.getElementById("questionDiv").style.display = 'none';
        }
    }

    render() {

        let resultSpan = null;
        if (this.state.isCorrect === YES) {
           resultSpan = <span className="text-success">CORRECT</span>
        } else if (this.state.isCorrect === NO) {
            resultSpan = <span className="text-danger">INCORRECT</span>
        }

        return (
            <div className="App">
               <div className="title-div">
                    <span className="quiz-title">Conservation Quiz</span>
               </div>
               <p className="details">Let's test your knowledge</p>
               <span className="time-style">Time Remaining: {this.state.seconds}</span>
               <div id="startDiv">
                   <Button variant="primary" onClick={this.handleChange}>Start Quiz</Button>
               </div>

               <div className="display-none" id="questionDiv">
                   &nbsp;
                   <Question currentQuestion={this.state.question}
                             validateAnswer={this.validateAnswer}
                             loadQuestions={this.loadQuestions}>
                   </Question>
                   {resultSpan}
               </div>

               <div className="display-none" id="finalDiv">
                   <Col xs={{ span: 4, offset: 4 }}>
                       <span className="text-success">
                           Successfully Submitted!!!
                       </span>
                       <br/>
                       <span>Your final score is {this.state.score}</span>
                    </Col>
               </div>

               <div className="display-none" id="timeupDiv">
                   <Col xs={{ span: 4, offset: 4 }}>
                       <span className="text-danger">
                          Time up!!!
                       </span>
                       <br/>
                       <span>Your final score is {this.state.score}</span>
                    </Col>
               </div>
            </div>
        );
    }
}
export default ConservationWrap;