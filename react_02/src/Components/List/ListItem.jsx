import React, { Component } from "react";
import Button from "../Button/Button";

class ListItem extends Component {
  render() {
    let { item, deleteItem, changeItem } = this.props;
    return (
      <li>
        {item}{" "}
        <Button title={"Delete"} clickFnc={deleteItem} />{" "}
        <Button title={"Change"} clickFnc={changeItem} />
      </li>
    );
  }
}

export default ListItem;
