import React from "react";
import { Header } from "../../components/Header";
import { Body } from "./style";

export const Menu = (props) => {
  return (
    <>
      <Body>
        <Header background={props.background} />
        {props.children}
      </Body>
    </>
  );
};
