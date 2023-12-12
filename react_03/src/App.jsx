import React, { useState, useEffect } from "react";
import List from "./components/List/List";
import LisrRender from "./components/ListRender/ListRender";
import User from "./components/User/User";
import Posts from "./components/Posts/Posts";

function App(props) {
  const [showList, setShowList] = useState(false);
  const [showListRender, setShowListRender] = useState(false);
  const [showUser, setShowUser] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     // setShowListRender(false);
  //   }, 1500);
  // }, []);

  // const deleteUser = () => {
  //   setShowUser(false);
  // };

  return (
    <>
      {showList && <List />}
      {showListRender && <LisrRender />}
      {showUser && <User />}
      {/* <button onClick={deleteUser}>Delete User</button> */}
      <Posts />
    </>
  );
}

export default App;
