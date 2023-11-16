import React, { Component } from "react";

class ListInterval extends Component {
  constructor(props) {
    super(props);

    if (this.state.list) {
      const removeItem = setInterval(() => {
        console.log(this.state.list)
        this.setState(
          {
            list: this.state.list.slice(0, -1),
          },
          () => {
            if (this.state.list.length === 0) {
              clearInterval(removeItem);
            }
          }
        );
      }, 1000);
    }
  }

  state = Object.assign({}, this.props);

  render() {
    let { list = [], color } = this.state;

    return list.length ? (
      <ul style={{ color }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}

export default ListInterval;
