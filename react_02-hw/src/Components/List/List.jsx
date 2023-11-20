import React, { Component } from "react";

class List extends Component {
  render() {
    const { list, actions } = this.props;
    //list: [{…}, {…}, {…}, {…}, {…}]
    //actions: [{…}] -> {text: 'Transfer first to right', action: ƒ}
    return (
      <ul key={this.index} className={"block"}>
        {list.length > 0 && (
          <>
            {list.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
            {actions.map((obj, index) => (
              <button
                key={index}
                className={"block__button"}
                onClick={obj.action}
              >
                {obj.text}
              </button>
            ))}
          </>
        )}
      </ul>
    );
  }
}

export default List;
