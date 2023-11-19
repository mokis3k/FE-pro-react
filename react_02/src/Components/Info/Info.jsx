import React, { Component } from "react";

class Info extends Component {
  render() {
    let { counter } = this.props;
    return <div>Info: {Math.pow(counter, 2)}</div>;
  }
}

export default Info;
