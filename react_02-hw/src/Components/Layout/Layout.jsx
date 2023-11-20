import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
  state = {
    firstBlockList: this.props.list,
    secondBlockList: [],
    thirdBlockList: [],
  };

  transferToSecond() {
    this.setState({
      firstBlockList: this.state.firstBlockList.filter(
        (item, index) => index !== 0
      ),
      secondBlockList: [
        this.state.firstBlockList[0],
        ...this.state.secondBlockList,
      ],
    });
  }

  transferToFirst() {
    this.setState({
      secondBlockList: this.state.secondBlockList.filter(
        (item, index) => index !== 0
      ),
      firstBlockList: [
        this.state.secondBlockList[0],
        ...this.state.firstBlockList,
      ],
    });
  }

  transferToThird() {
    this.setState({
      secondBlockList: this.state.secondBlockList.filter(
        (item, index) => index !== 0
      ),
      thirdBlockList: [
        this.state.secondBlockList[0],
        ...this.state.thirdBlockList,
      ],
    });
  }

  removeLastItem() {
    this.setState({
      thirdBlockList: this.state.thirdBlockList.filter(
        (item, index, arr) => index !== arr.length - 1
      ),
    });
  }

  // Исправить два блока с кодом в каждом ul
  // Разбить код на компоненты как указано в задании

  render() {
    return (
      <div className="blocks__container">
        <ul key={this.index} className="block">
          {this.state.firstBlockList.length
            ? this.state.firstBlockList.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))
            : null}
          {this.state.firstBlockList.length ? (
            <button
              className="block__button"
              onClick={() => this.transferToSecond()}
            >
              Transefer first to right
            </button>
          ) : null}
        </ul>

        <ul key={this.index} className="block">
          {this.state.secondBlockList.length
            ? this.state.secondBlockList.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))
            : null}
          {this.state.secondBlockList.length ? (
            <>
              <button
                className="block__button"
                onClick={() => this.transferToFirst()}
              >
                Transefer first to right
              </button>{" "}
              <button
                className="block__button"
                onClick={() => this.transferToThird()}
              >
                Transfer first to left
              </button>
            </>
          ) : null}
        </ul>

        <ul key={this.index} className="block">
          {this.state.thirdBlockList.length
            ? this.state.thirdBlockList.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))
            : null}
          {this.state.thirdBlockList.length ? (
            <button
              className="block__button"
              onClick={() => this.removeLastItem()}
            >
              Remove last item
            </button>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default Layout;
