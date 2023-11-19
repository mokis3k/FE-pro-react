import React, { Component } from "react";
// import List from "../List/List";
import Counter from "../Counter/Counter";
import Info from '../Info/Info'

class Layout extends Component {
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
    const counterValue = +document.querySelector("#counterValue").value;

    this.setState({
      counter: this.state.counter + counterValue,
    });
  }

  render() {
    // const users = ["Jack", "Anna", "Petr", "Taras"];
    let { counter } = this.state;
    return (
      <>
        <h1>Counter: {counter}</h1>
        {/* <List list={users}/>
                <List /> */}
        <Counter
          counter={counter}
          decrement={this.decrement.bind(this)}
          increment={this.increment.bind(this)}
          add={this.add.bind(this)}
        />
        <Info counter={counter}/>
      </>
    );
  }
}

export default Layout;
