import React, { useState, useEffect, useCallback } from "react";
import {
  Body,
  Content,
  PlayerWrapper,
  ModalWrapper,
  Image,
  SliderWrapper,
  Slider,
  Play,
  NextSong,
  PrevSong,
  Controlers,
} from "./style";
import { useQuery } from "../../hooks/useQuery";
import FastAverageColor from "fast-average-color";
import { useSong } from "../../hooks/useSong";

export const Player = () => {
  const query = useQuery();
  const index = query.get("index");
  const [color, setColor] = useState();
  const { getSongByIndex, song } = useSong();

  const getColor = useCallback(() => {
    if (!song?.album?.cover_medium) return;
    const avgColor = new FastAverageColor();
    avgColor.getColorAsync(song?.album?.cover_medium).then((color) => {
      setColor(color);
    });
  }, [song?.album?.cover_medium]);

  useEffect(() => {
    getColor();
  }, [getColor]);

  useEffect(() => {
    getSongByIndex(index);
  }, [getSongByIndex, index]);

  return (
    <>
      <PlayerWrapper>
        <ModalWrapper>
          <Image src={song?.album?.cover_big} />
          <div className="column">
            <h3>{song?.title}</h3>
            <span>{song?.artist?.name}</span>
          </div>
          <SliderWrapper>
            <Slider />
          </SliderWrapper>
          <div className="row">
            <span>0:00</span>
            <span>0:30</span>
          </div>
          <Controlers>
            <PrevSong>
              <img src="/icons/PrevSong.svg" alt="previousSong" />
            </PrevSong>
            <Play>
              <img src="/icons/play.svg" alt="playSong" />
            </Play>
            <NextSong>
              <img src="/icons/NextSong.svg" alt="nextSong" />
            </NextSong>
          </Controlers>
        </ModalWrapper>
      </PlayerWrapper>
      <Body color={color?.hex}>
        <Content></Content>
      </Body>
    </>
  );
};
