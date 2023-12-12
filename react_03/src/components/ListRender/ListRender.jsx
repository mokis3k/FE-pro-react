import React, { useState, useEffect } from "react";

function ListRender(props) {
  const [list, setList] = useState(["Jack", "Taras", "Anton", "Anna"]);
  const [removeItemInterval, setRemoveItemInterval] = useState();

  useEffect(() => {
    const removeItem = setInterval(() => {
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);

    setRemoveItemInterval(removeItem);

    return () => {
      console.log("in componentWillUnmount for First useEffect");
      clearInterval(removeItem);
    };
  }, []);

  useEffect(() => {
    if (list.length === 0) clearInterval(removeItemInterval);
    console.log("in useEffect for List", list);
    return () => {
      console.log("in componentWillUnmount for List");
    };
  }, [list]);

  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}

export default ListRender;
