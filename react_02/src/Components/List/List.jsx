import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  state = Object.assign({}, this.props);

  deleteItem(index) {
    this.setState({
      list: this.state.list.filter((item, i) => i !== index),
    });
  }

  changeItem(index){
    this.setState({
        list: this.state.list.map((item, i) => {
            if (i === index) item += '!';
            return item
        })
    })
  }

  render() {
    let { list = [] } = this.state;

    return list.length ? (
      <ul>
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            deleteItem={() => this.deleteItem(index)}
            changeItem={() => this.changeItem(index)}
          />
        ))}
      </ul>
    ) : null;
  }
}

export default List;
