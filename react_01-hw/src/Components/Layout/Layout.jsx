import React, { Fragment } from "react";
import Table from "./../Table/Table";

function Layout(props) {
  const animals = [
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` },
  ];
  return (
    <Fragment>
      <Table list={animals} color={"green"} fontWeight={700}/>
    </Fragment>
  );
}

export default Layout;
