import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Body,
  Content,
  PlayerWrapper,
  ModalWrapper,
  Image,
  Play,
  NextSong,
  PrevSong,
  Controlers,
} from "./style";
import { useQuery } from "../../hooks/useQuery";
import FastAverageColor from "fast-average-color";
import { useSong } from "../../hooks/useSong";
import { Slider } from "../../components/Slider";
import { Redirect } from "react-router-dom";

export const Player = () => {
  const query = useQuery();
  const index = query.get("index");
  const artistId = query.get("artistId");
  const [color, setColor] = useState();
  const [percentage, setPercentage] = useState(0);
  const { getSongByIndex, song } = useSong();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [redirectToNext, setRedirectToNext] = useState(false);

  const PrevIndex = Number(index) > 0 ? Number(index) - 1 : 5;
  const NextIndex = Number(index) < 5 ? Number(index) + 1 : 0;

  const audioRef = useRef();

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
    getSongByIndex(artistId, index);
  }, [getSongByIndex,artistId, index]);

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
    if (Number(time) !== 0)
      if (Number(time).toFixed(2) === Number(duration).toFixed(2)) {
        setRedirectToNext(NextIndex);
      }
  };

  const play = (isPlaying) => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  return (
    <>
      <PlayerWrapper>
        <ModalWrapper>
          <Image src={song?.album?.cover_big} />
          <div className="column">
            <h3>{song?.title}</h3>
            <span>{song?.artist?.name}</span>
          </div>
          <Slider percentage={Number(percentage) ?? 0} onChange={onChange} />
          <audio
            ref={audioRef}
            src={song?.preview}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration.toFixed(2));
              play();
            }}
          ></audio>
          <div className="row">
            <span>
              {currentTime !== 0
                ? currentTime.toString().replace(".", ":")
                : `0:00`}
            </span>
            <span>
              {duration !== 0 ? duration.toString().replace(".", ":") : `00:00`}
            </span>
          </div>
          <Controlers>
            <PrevSong to={`/song?artistId=${artistId}&index=${PrevIndex}`}>
              <img src="/icons/PrevSong.svg" alt="previousSong" />
            </PrevSong>
            <Play onClick={() => play(isPlaying)}>
              <img
                src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"}
                alt="playSong"
              />
            </Play>
            <NextSong to={`/song?artistId=${artistId}&index=${NextIndex}`}>
              <img src="/icons/NextSong.svg" alt="nextSong" />
            </NextSong>
          </Controlers>
        </ModalWrapper>
      </PlayerWrapper>
      <Body color={color?.hex}>
        <Content></Content>
      </Body>
      {redirectToNext === NextIndex && (
        <Redirect to={`/song?index=${NextIndex}`} />
      )}
    </>
  );
};
