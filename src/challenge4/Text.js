import React, { Component } from "react";

export default class Text extends Component {
  constructor(props) {
    super(props);

    this.pElementRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.pElementRef.current.outerHTML);
  };

  render() {
    return (
      <p ref={this.pElementRef} onClick={this.handleClick}>
        Sample Text to test
      </p>
    );
  }
}
