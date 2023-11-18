import React, { Component, Fragment } from "react";

class Table extends Component {
  state = {
    list: this.props.list ? this.props.list : [],
    listCut: this.props.list ? this.props.list : [],
  };

  constructor(props) {
    super(props);

    if (this.state.list.length) {
      let { list, listCut } = this.state;
      const randomActiveInterval = setInterval(() => {
        const randomIdex = Math.floor(Math.random() * listCut.length);
        const randomItem = listCut[randomIdex];
        const listActive = list.map((item) => ({
          ...item,
          active: item.type === randomItem.type,
        }));
        listCut = listCut.filter((item) => item.type !== randomItem.type);

        this.setState(
          {
            list: listActive,
            listCut,
          },
          () => {
            if (listCut.length === 0) {
              clearInterval(randomActiveInterval);
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
              style={obj.active ? { color: "green", fontWeight: "700" } : null}
            >
              {Object.values(obj).map((value, i) => (
                <td key={`0.${i}`}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  }
}

export default Table;
