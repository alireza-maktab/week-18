import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }

  componentDidMount() {
    console.log("component Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log("component Updated");
  }

  componentWillUnmount() {
    console.log("component Unmount");
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        App <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>count</button>
      </div>
    );
  }
}
