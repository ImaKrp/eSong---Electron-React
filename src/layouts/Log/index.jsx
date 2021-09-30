import React from "react";
import { Header, Body, Logo } from "./style";

export const Log = (props) => {
  const imgPath =
    "https://raw.githubusercontent.com/ImaKrp/eSong---Electron-React/7b5645222478d5a94b6d18bd76a60660d9bb3d68/public/icons/";
  return (
    <>
      <Body>
        <Header>
          <Logo src={`${imgPath}icon.svg`} alt="Logo" />
          <p>
          eSong<span>®</span>
          </p>
        </Header>
        {props.children}
      </Body>
    </>
  );
};
