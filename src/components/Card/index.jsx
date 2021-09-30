import React from "react";
import { Wrapper, Image, ImageDiv, SongName, Artist, Play } from "./style";

export const Card = (props) => {
  const imgPath =
    "https://raw.githubusercontent.com/ImaKrp/eSong---Electron-React/7b5645222478d5a94b6d18bd76a60660d9bb3d68/public/icons/";
  return (
    <>
      <Wrapper to={`/song?artistId=${props.artistId}&index=${props.index}`}>
        <ImageDiv>
          <Image src={props.image} />
          <Play to={`/song?artistId=${props.artistId}&index=${props.index}`}>
            <img src={`${imgPath}play.svg`} alt="playSong" />
          </Play>
        </ImageDiv>
        <SongName>{props.name}</SongName>
        <Artist>{props.artist}</Artist>
      </Wrapper>
    </>
  );
};
