import React from "react";
import { Wrapper, Image, ImageDiv, SongName, Artist, Play } from "./style";

export const Card = (props) => {
  return (
    <>
      <Wrapper>
        <ImageDiv>
          <Image src={props.image} />
          <Play to={`/song?artistId=${props.artistId}&index=${props.index}`}>
            <img src="/icons/play.svg" alt="playSong" />
          </Play>
        </ImageDiv>
        <SongName>{props.name}</SongName>
        <Artist>{props.artist}</Artist>
      </Wrapper>
    </>
  );
};
