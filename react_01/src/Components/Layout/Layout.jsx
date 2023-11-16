import React from "react";
// import List from "../List/List";
// import ListCLass from "../ListClass/ListCLass";
import ListInterval from "../ListInterval/ListInterval";

function Layout(props) {
  const humans = ["Jack", "Anna", "Sasha"];
  return (
    <React.Fragment>
      <h3>Layout</h3>
      {/* <List list={["cat", "dog", "lion"]} />
      <List list={humans} />
      <List />

      <hr></hr>

      <ListCLass list={["cat", "dog", "lion"]} />
      <ListCLass list={humans} />
      <ListCLass /> */}

      <ListInterval list={humans} color={"green"}/>
    </React.Fragment>
  );
}

export default Layout;
