import React, { Component } from "react";
import List from "../List/List";
import "./ToDo.css";

class ToDo extends Component {
  state = {
    firstBlockList: this.props.list,
    secondBlockList: [],
    thirdBlockList: [],
  };

  transferToSecond = () => {
    this.setState({
      firstBlockList: this.state.firstBlockList.filter(
        (item, index) => index !== 0
      ),
      secondBlockList: [
        this.state.firstBlockList[0],
        ...this.state.secondBlockList,
      ],
    });
  };

  transferToFirst = () => {
    this.setState({
      secondBlockList: this.state.secondBlockList.filter(
        (item, index) => index !== 0
      ),
      firstBlockList: [
        this.state.secondBlockList[0],
        ...this.state.firstBlockList,
      ],
    });
  };

  transferToThird = () => {
    this.setState({
      secondBlockList: this.state.secondBlockList.filter(
        (item, index) => index !== 0
      ),
      thirdBlockList: [
        this.state.secondBlockList[0],
        ...this.state.thirdBlockList,
      ],
    });
  };

  removeLastItem = () => {
    this.setState({
      thirdBlockList: this.state.thirdBlockList.filter(
        (item, index, arr) => index !== arr.length - 1
      ),
    });
  };

  render() {
    const { firstBlockList, secondBlockList, thirdBlockList } = this.state;

    return (
      <div className={"blocks__container"}>
        <List
          list={firstBlockList}
          actions={[
            { text: "Transfer first to right", action: this.transferToSecond },
          ]}
        />
        <List
          list={secondBlockList}
          actions={[
            { text: "Transfer first to left", action: this.transferToFirst },
            { text: "Transfer first to right", action: this.transferToThird },
          ]}
        />
        <List
          list={thirdBlockList}
          actions={[{ text: "Remove last item", action: this.removeLastItem }]}
        />
      </div>
    );
  }
}

export default ToDo;
