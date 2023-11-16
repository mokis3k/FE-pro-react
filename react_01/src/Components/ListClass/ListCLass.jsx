import React, { Component } from "react";
import "./style.css";

class ListCLass extends Component {
  state = {
    list: this.props.list ? this.props.list : [],
    color: "black",
    backgroundColor: "white",
    borderWidth: "1px",
  };

  constructor(props) {
    super(props);

    setTimeout(() => {
      console.log(this);
      this.setState({
        list: this.state.list.slice(0, -1),
        color: "white",
        backgroundColor: "grey",
        borderWidth: "5px",
      });
    }, 1000);
  }

  render() {
    let { list, color, backgroundColor, borderWidth } = this.state;

    return list && list.length ? (
      <ul className="list" style={{ color, backgroundColor, borderWidth }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}

export default ListCLass;
