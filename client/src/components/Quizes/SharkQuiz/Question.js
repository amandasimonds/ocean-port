import React from 'react';
import { Button } from 'reactstrap';
import './style.css';

class Question extends React.Component {
    render() {
        let listItems = []
        if (Object.keys(this.props.question).length > 0) {
            listItems = this.props.question.choices.map((choice) =>
                <ul>
                    <Button key={choice}>
                        {choice}
                    </Button>
                </ul>
            );
        }
        if (this.props.question.hasOwnProperty('question')) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span>{this.props.question.question}</span>
                            <span>{listItems}</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
export default Question;