import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';

class Question extends React.Component {

    constructor() {
        super();
    }

    handleChange = (e) => {
        this.props.loadQuestions();
        this.props.validateAnswer(e)
    }

    render() {
        
        let listItems = []
        if (Object.keys(this.props.currentQuestion).length > 0) {
            listItems = this.props.currentQuestion.answers.map((choice) =>
                <ul>
                    <Button variant="primary" key={choice} onClick={() => this.handleChange(choice)}>
                        {choice.content}
                    </Button>
                </ul>
            );
        }

        if (this.props.currentQuestion.hasOwnProperty('question')) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span>
                                {this.props.currentQuestion.question}
                            </span>
                            <br/><br/>
                            <span>{listItems}</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default Question;