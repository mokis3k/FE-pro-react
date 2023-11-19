import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
  state = {
    counter: 0,
  };

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  add(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    let { counter } = this.state;

    return (
      <div className="counter">
        <button onClick={() => this.decrement()}>-</button>
        <span>{counter}</span>
        <button onClick={() => this.increment()}>+</button>
        <form onSubmit={this.add}>
          <input type="number" />
        </form>
      </div>
    );
  }
}

export default Counter;
