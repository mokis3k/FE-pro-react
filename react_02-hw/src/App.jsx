import React, { Component } from "react";
import ToDo from "./Components/ToDo/ToDo.jsx";

class App extends Component {
  render() {
    const list = [
      {
        id: 1,
        title: `Task 1`,
      },
      {
        id: 2,
        title: `Task 2`,
      },
      {
        id: 3,
        title: `Task 3`,
      },
      {
        id: 4,
        title: `Task 4`,
      },
      {
        id: 5,
        title: `Task 5`,
      },
    ];

    return <ToDo list={list}/>;
  }
}

export default App;
