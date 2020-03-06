import React, { Component } from 'react';
import Constant from './constants'

class Fish extends Component {
  constructor() {
    super();

    this.state = {
      x: Math.random() * 
        (window.innerWidth - Constant.max_scale_factor * Constant.image_width),
      xDirection: 'right',
      xVelocity: 2,

      y: Math.random() * 
        (window.innerHeight - Constant.max_scale_factor * Constant.image_height),
      yDirection: 'down',
      yVelocity: 1,

      z: Math.random() * Constant.min_z,
      zVelocity: 0.1
    };
  }

  chooseRandomMovement() {
    let xVelocity = Math.random() * Constant.max_x_velocity;
    let yVelocity = Math.random() * Constant.max_y_velocity;
    let zVelocity = Math.random() * Constant.max_z_velocity;
    let xDirection = Math.random() < 0.5 ? 'left' : 'right';
    let yDirection = Math.random() < 0.5 ? 'up' : 'down';
    let zDirection = Math.random() < 0.5 ? 'in' : 'out';
    this.setState({
      xVelocity: xVelocity,
      yVelocity: yVelocity,
      xDirection: xDirection,
      yDirection: yDirection,
      zVelocity: zVelocity,
      zDirection: zDirection
    })
  }

  tick() {
    this.move();
    if(Math.random() < Constant.chance_to_change_direction) {
      this.chooseRandomMovement();
    }
  }

  relocate() {
    this.setState({
    x: Math.random() * 
      (window.innerWidth - Constant.max_scale_factor * Constant.image_width),

    y: Math.random() * 
      (window.innerHeight - Constant.max_scale_factor * Constant.image_height),
    yDirection: 'down',
    yVelocity: 1,

    z: Constant.min_z,  // start in the back
    zVelocity: 0.1
    })
  }

  move() {
    let { xVelocity, xDirection, yVelocity, yDirection, zVelocity, zDirection } = this.state;

    if (this.state.x > window.innerWidth || this.state.y > window.innerHeight) {
      this.relocate(); // if the fish is outisde the window (window was resized, probably)
    } 

    if (this.state.x > 
      (window.innerWidth - Constant.max_scale_factor * Constant.image_width)) {
      xDirection = 'left';
    } else if (this.state.x < Constant.max_scale_factor * Constant.image_width) {
      xDirection = 'right';
    }

    if (this.state.y > 
      ( window.innerHeight - Constant.max_scale_factor * Constant.image_height )) {
      yDirection = 'up';
    } else if (this.state.y < Constant.max_scale_factor * Constant.image_height) {
      yDirection = 'down';
    }

    if (this.state.z > (-1)) {
      zDirection = 'in';
    } else if (this.state.z < Constant.min_z) {
      zDirection = 'out';
    }

    this.setState({
      x: this.state.x + (xDirection === 'right' ? xVelocity : -xVelocity),
      xDirection: xDirection,
      y: this.state.y + (yDirection === 'down' ? yVelocity : -yVelocity),
      yDirection: yDirection,
      z: this.state.z + (zDirection === 'in' ? -zVelocity : zVelocity),
      zDirection: zDirection
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), Constant.tick_interval
    );
  }

  render() {
    let yScale = 2 - (this.state.z / Constant.min_z);
    let xScale = ( this.state.xDirection === 'right' ? yScale : -yScale );
    let fishScale = {transform: `scaleX(${xScale}) scaleY(${yScale})`};
    let fishStyle = { ...fishScale, left: this.state.x, top: this.state.y, zIndex: Math.round(this.state.z) }

    return (
      <img className='fish' style={fishStyle} src={this.props.image}/>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default Fish;