import React, { Component } from 'react';
import Fish from './Fish'
import './style.css';

class Aquarium extends Component {

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  render() {
    return (
      <div>
        <div className='water' style={{ ...this.state, zIndex:-1 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-10 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-20 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-30 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-40 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-50 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-60 }}></div>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-10.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-19.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-11.gif'/>
        <Fish image='./images/clownfishb.gif'/>
      </div>
    );
  }
}

export default Aquarium;