import React from "react";
import { Header, Body, Logo } from "./style";

export const Log = (props) => {
  return (
    <>
      <Body>
        <Header>
          <Logo src="/icons/icon.svg" alt="Logo" />
          <p>
            CloudSound<span>®</span>
          </p>
        </Header>
        {props.children}
      </Body>
    </>
  );
};
