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
  Volume,
  Loop,
} from "./style";
import { useQuery } from "../../hooks/useQuery";
import FastAverageColor from "fast-average-color";
import { useSong } from "../../hooks/useSong";
import { Slider } from "../../components/Slider";
import { Redirect } from "react-router-dom";
import { Sound } from "../../svg/Sound";
import { LoopSVG } from "../../svg/Loop";

export const Player = () => {
  const query = useQuery();
  const index = query.get("index");
  const artistId = query.get("artistId");
  const [color, setColor] = useState();
  const [percentage, setPercentage] = useState(0);
  const {
    getSongByIndex,
    song,
    songVolume,
    setSongVolume,
    loopState,
    handleLoopState,
  } = useSong();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [redirectToNext, setRedirectToNext] = useState(false);
  const [songError, setSongError] = useState(false);

  const PrevIndex = Number(index) > 0 ? Number(index) - 1 : 5;
  const NextIndex = Number(index) < 5 ? Number(index) + 1 : 0;
  const audioRef = useRef();

  useEffect(() => {
    if (redirectToNext) setRedirectToNext(false);
  }, [redirectToNext]);

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
    if (getSongByIndex(artistId, index) === true) setSongError(true);
  }, [getSongByIndex, artistId, index]);

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
        console.log(loopState, index)
        if (loopState === 0 && index === '5') {
          setRedirectToNext(false);
          play(!isPlaying)
          return;
        }
        if (loopState !== 2) setRedirectToNext(true);
        if (loopState === 2) {
          play(true);
        }
      }
  };

  const play = (play) => {
    const audio = audioRef.current;
    audio.volume = songVolume;

    if (play) {
      setIsPlaying(true);
      audio.play();
      return;
    }

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const handleVolume = (e) => {
    const audio = audioRef.current;

    let tempVolume;

    if (e.button === 0) {
      if (songVolume === 0.15) return;
      if (songVolume === 0.1) tempVolume = 0.15;
      if (songVolume === 0.05) tempVolume = 0.1;
      if (songVolume === 0) tempVolume = 0.05;
    }
    if (e.button === 2) {
      if (songVolume === 0.15) tempVolume = 0.1;
      if (songVolume === 0.1) tempVolume = 0.05;
      if (songVolume === 0.05) tempVolume = 0;
      if (songVolume === 0) return;
    }
    setSongVolume(tempVolume);
    audio.volume = tempVolume;
  };

  const imgPath =
    "https://raw.githubusercontent.com/ImaKrp/eSong---Electron-React/7b5645222478d5a94b6d18bd76a60660d9bb3d68/public/icons/";

  return (
    <>
      <PlayerWrapper>
        <ModalWrapper>
          <Image src={song?.album?.cover_big} />
          <div className="column">
            <h3>{song?.title}</h3>
            <span>{song?.artist?.name}</span>
          </div>
          <Slider
            percentage={percentage.toString() ?? "0"}
            onChange={onChange}
          />
          <audio
            ref={audioRef}
            src={song?.preview}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration.toFixed(2));
              play(true);
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
            <Loop
              onClick={() => handleLoopState()}
              level={loopState === 0 ? 0 : loopState === 1 ? 1 : 2}
            >
              {loopState === 0 && <LoopSVG level={0} />}
              {loopState === 1 && <LoopSVG level={1} />}
              {loopState === 2 && <LoopSVG level={2} />}
            </Loop>
            <PrevSong to={`/song?artistId=${artistId}&index=${PrevIndex}`}>
              <img src={`${imgPath}PrevSong.svg`} alt="previousSong" />
            </PrevSong>
            <Play onClick={() => play(!isPlaying)}>
              <img
                src={isPlaying ? `${imgPath}pause.svg` : `${imgPath}play.svg`}
                alt="playSong"
              />
            </Play>
            <NextSong to={`/song?artistId=${artistId}&index=${NextIndex}`}>
              <img src={`${imgPath}NextSong.svg`} alt="nextSong" />
            </NextSong>
            <Volume
              onClick={(e) => handleVolume(e)}
              onContextMenu={(e) => handleVolume(e)}
            >
              {songVolume === 0.05 && <Sound level={1} />}
              {songVolume === 0.1 && <Sound level={2} />}
              {songVolume >= 0.15 && <Sound level={3} />}
              {songVolume === 0 && <Sound level={0} />}
            </Volume>
          </Controlers>
        </ModalWrapper>
      </PlayerWrapper>
      <Body color={color?.hex}>
        <Content></Content>
      </Body>
      {redirectToNext && (
        <Redirect to={`/song?artistId=${artistId}&index=${NextIndex}`} />
      )}
      {songError && <Redirect to="/?redirect=profile" />}
    </>
  );
};
