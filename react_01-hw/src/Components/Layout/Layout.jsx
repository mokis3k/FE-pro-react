import React, { Fragment } from "react";
import Table from "./../Table/Table";

function Layout() {
  const animals = [
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` },
  ];

  return (
    <Fragment>
      <Table list={animals} />
    </Fragment>
  );
}

export default Layout;
