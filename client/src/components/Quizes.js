import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Label } from 'reactstrap';
import UserContext from "../utils/UserContext"
import API from "../utils/API";
import { Col, Row, Container } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck } from 'reactstrap';
import  "../styles/Quizes.css"


function Quiz () {
    return (
   
    <CardDeck>
    <Card>
      <CardImg top width="100%" src="/assets/images/fish.gif" alt="Card image cap" />
      <CardBody>
        <CardTitle>Quiz #1</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <Button>Take Quiz!</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/assets/images/fish.gif" alt="Card image cap" />
      <CardBody>
        <CardTitle>Quiz #2</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Take Quiz!</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src="/assets/images/fish.gif" alt="Card image cap" />
      <CardBody>
        <CardTitle>Quiz #3</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        <Button>Take Quiz!</Button>
      </CardBody>
    </Card>
  </CardDeck>
   
  
      );
    };
    


export default Quiz;