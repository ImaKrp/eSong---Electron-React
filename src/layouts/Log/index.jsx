import React from "react";
import { Header, Content } from "./style";

export const Log = (props) => {
  return (
    <>
      <Header></Header>
      <Content>{props.children}</Content>
    </>
  );
};
