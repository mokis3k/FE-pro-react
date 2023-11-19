import React, { Component } from "react";

class Button extends Component {
  render() {
    let {title, clickFnc} = this.props
    return <button onClick={clickFnc}>{title}</button>;
  }
}

export default Button;
