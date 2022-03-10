import React, { Component } from "react";

export default class Clock extends Component {
  intervalId = null;

  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
      color: "rgba(0, 0, 0)",
    };
  }

  createRandomColor() {
    const rgb = [null, null, null].map(() => Math.floor(Math.random() * 255));
    return `rgba(${rgb.join(", ")})`;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.time !== this.state.time) {
      this.setState({
        color: this.createRandomColor(),
      });
    }
  }

  componentWillUnmount() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <h1 style={{ color: this.state.color }}>
        {this.state.time.toLocaleTimeString()}
      </h1>
    );
  }
}
