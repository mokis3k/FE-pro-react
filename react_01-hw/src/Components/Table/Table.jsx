import React, { Component, Fragment } from "react";

class Table extends Component {
  state = {
    list: this.props.list ? this.props.list : [],
    listCut: this.props.list ? this.props.list : [],
  };

  constructor(props) {
    super(props);

    if (this.state.list) {
      let { list, listCut } = this.state;
      const chooseRandomItem = setInterval(() => {
        const randomIdex = Math.floor(Math.random() * listCut.length);
        const randomItem = listCut[randomIdex];
        const setActiveList = list.map((item) => ({
          ...item,
          active: item.type === randomItem.type,
        }));
        list = listCut.filter((elem) => elem.type !== randomItem.type);

        this.setState(
          {
            list: setActiveList,
            listCut: list,
          },
          () => {
            if (listCut.length === 0) {
              clearInterval(chooseRandomItem);
            }
          }
        );
      }, 2000);
    }
  }

  render() {
    let { list } = this.state;

    return list && list.length ? (
      <table>
        <tbody>
          {list.map((obj, index) => (
            <tr
              key={index}
              style={
                obj.active ? { color: "green", fontWeight: "700" } : null
              }
            >
              {Object.values(obj).map((value, i) => (
                <td key={`${index}.${i}`}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  }
}

export default Table;
