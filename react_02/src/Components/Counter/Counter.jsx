import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
  render() {
    let { counter, decrement, increment, add } = this.props;

    return (
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
        <form onSubmit={add}>
          <input type="number" id="counterValue" />
        </form>
      </div>
    );
  }
}

export default Counter;
