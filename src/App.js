import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.domElementRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.domElementRef.current);
  }

  render() {
    return (
      <div ref={this.domElementRef} id="abbas">
        hello
      </div>
    );
  }
}
