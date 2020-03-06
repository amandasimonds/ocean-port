import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {Card, CardText, CardBody,CardTitle, CardSubtitle, Button,Label,CardHeader,Form, FormGroup, Input } from 'reactstrap';
import UserContext from "../utils/UserContext"
import API from "../utils/API";

 var questions = [
{   title: "Which is the biggest animal",
    choices: ["whale", "lion", "cheeta", "ant"],
    correctAnswer: "whale"
},

{
title: "which is capital of USA",
choices: ["Dallas", "Denver", "Chicago", "Washington DC"],
correctAnswer: "Washington DC"
},

{
    title: "Arrays in JavaScript can be used to store:",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"

},

 

{
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes"
},

{

    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log"

}

];

 

function FishQuiz() {

    var timeEl = document.querySelector(".iTime")
    var questionsEl = document.querySelector(".questions-rendered");
    var secondsRemaining = 75;
    var penaltySeconds = 10;
    var timerInterval;
    var numCorrect = 0;
    var questionIndex = 0;
    var highScores;
    var highScoresArray = [];
    var score = 0;

    const initialsDiv = document.getElementById("initialsDiv");
    const scoresDiv = document.getElementById("scoresDiv");

    function startQuiz() {

        setTime();
        var startDiv = document.getElementById("startDiv");
        startDiv.style.display = "none";

        var questionsDiv = document.getElementById("questionsDiv");
        questionsDiv.style.display = "inline";

        console.log('Success');
        //document.getElementById("choice-response").innerHTML = "";
        //document.getElementById("instructions").innerHTML = "";
        
        displayQuestions();

    }

 

    // Starts timer

    function setTime() {

        /*timerInterval = setInterval(function () {
        secondsRemaining--;
        timeEl.textContent = "Time Remaining: " + secondsRemaining;
        if (secondsRemaining === 0) {

                finish();

            }

        }, 1000);

 */

    }

 

    function finish() {

        // Stops timer

        clearInterval(timerInterval);

        // Sets variable to zero

        secondsRemaining = 0;

        // Changes time remaining heading to "Done" when the quiz is complete

        document.querySelector(".iTime").innerHTML = "Done";

        // Clears out last question displayed

        questionsEl.textContent = "";

        // Calculates score 

        score = numCorrect * (100 / questions.length);

        // Displays final score

        document.getElementById("choice-response").innerHTML = "Your final score is: " + score;

        // Pops up div to enter initials

        initialsDiv.style.display = "block";

        // Clears out textbox of previous user initials; empty box every time

        document.getElementById("myInitials").value = "";

    }


    /*Gets initials after selecting submit button

     Does not validate whether or not initials were entered*/

    function getInitials() {

        if (highScoresArray.length === 0) {

            highScores = document.getElementById("myInitials").value + " - " + score;

        } else {

            highScores = " " + document.getElementById("myInitials").value + " - " + score;

        }

        highScoresArray.push(highScores);

        initialsDiv.style.display = "none";

        document.querySelector(".iTime").innerHTML = "High Scores";

        document.getElementById("choice-response").innerHTML = highScoresArray;

        scoresDiv.style.display = "block";

    }

 

    // If "Go Back" button is clicked, this function is triggered to go back to the start page

    function startOver() {

        document.getElementById("choice-response").innerHTML = "";

        scoresDiv.style.display = "none";

        timeEl.textContent = "Time Remaining: 0";

        var startBtn = document.getElementById("startQuiz");
        startBtn.style.display = "initial";

        var viewScoresBtn = document.getElementById("viewScores");
        viewScoresBtn.style.display = "initial";

        document.getElementById("instructions").innerHTML = "As a coding bootcamp student, I want to take a timed quiz on JavaScript fundamentals that stores high scores so I can gauge my progrees compared to my peers.";

    }

 

    // If clicked, will show high scores in the array, but if array is empty, shows "no scores"

    function viewAllScores() {

        if (highScoresArray.length === 0) {

            document.getElementById("choice-response").innerHTML = "No Scores: "

        } else {

            document.getElementById("choice-response").innerHTML = "High Scores: " + highScoresArray;

        }

    }

 

    // Empties array when "Clear High Scores" is clicked

    function clearScores() {

        highScoresArray = [];

        document.getElementById("choice-response").innerHTML = highScoresArray;

    }

 

    // Displays question and answers from the array one after the other

    function displayQuestions() {

        if (secondsRemaining <= 0 || questionIndex >= questions.length) {

            finish();

            return;

        }

        var questionsEl = document.getElementById("questionsDiv");
        var question = questions[questionIndex];

        var choiceDiv = document.createElement("div");
        for (var i = 0; i < question.choices.length; i++) {

            var option = document.createElement("button");

            choiceDiv.innerHTML = choiceDiv.innerHTML + option;

            option.textContent = question.choices[i];

            option.style.cssText = "display: block; padding: 5px; margin-left: 40%; margin-bottom: 5px; width: 175px;";

            option.setAttribute("class", "option");

            option.addEventListener("click", function (e) {

                var optionClicked = (e.target.innerHTML);

                if (optionClicked === questions[questionIndex].correctAnswer) {

                    // Variable is keeping track of the correct answers
        
                    numCorrect++;
                    document.getElementById("choice-response").innerHTML = "correct";

                    displayQuestions(questionIndex++);
                            
        
                } else {
        
                    // Incorrect answers result in a time penalty

                    secondsRemaining = secondsRemaining - penaltySeconds;

                    document.getElementById("choice-response").innerHTML = "wrong";

                    displayQuestions(questionIndex++);
        
                }
        
            })
        }

        questionsEl = questionsEl + "<span>" + question.title + "</span>" + choiceDiv.innerHTML;
        console.error(questionsEl);
        /*questionsEl.textContent = "";

        var question = questions[questionIndex];

        var questionDiv = document.createElement("div");

        var questionText = document.createElement("p");

        questionText.textContent = question.title;

        questionDiv.appendChild(questionText)

        for (var i = 0; i < question.choices.length; i++) {

             var option = document.createElement("button");

             option.textContent = question.choices[i];

             option.style.cssText = "display: block; padding: 5px; margin-left: 40%; margin-bottom: 5px; width: 175px;";

             option.setAttribute("class", "option");

             option.addEventListener("click", function (e) {

             var optionClicked = (e.target.innerHTML);

        if (optionClicked === questions[questionIndex].correctAnswer) {

         // Variable is keeping track of the correct answers

                  numCorrect++;
                    document.getElementById("choice-response").innerHTML = "correct";

                    displayQuestions(questionIndex++);

                } else {

                    // Incorrect answers result in a time penalty

                    secondsRemaining = secondsRemaining - penaltySeconds;

                    document.getElementById("choice-response").innerHTML = "wrong";

                    displayQuestions(questionIndex++);

                }

            })

            questionDiv.appendChild(option);

        }

        questionsEl.appendChild(questionDiv);*/

    }


    return (

        <div className="quizContainer container-fluid well well-lg">

            <Card body className="text-center" style={{ width: '100vh', margin:'0 auto'}}>

                <CardBody >

                    <CardHeader></CardHeader>

                    <CardTitle tag="h3">Coding Quiz</CardTitle>
                    <div id="startDiv">

                        <CardText>Play the Code Quiz and test your knowledge</CardText>

                        <Button color="primary" size="lg" id="startQuiz" onClick={startQuiz}>Start Quiz</Button>{' '}

                        <Button size="lg" id="viewScores" onClick={viewAllScores}>Go View High Scores</Button>{' '}

                    </div>
                    <div id="questionsDiv"></div>
                </CardBody>

            </Card>

        </div>

   );

}

                                                                   

export default FishQuiz;