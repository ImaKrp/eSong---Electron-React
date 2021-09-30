import React, { useCallback, useEffect } from "react";
import { useSong } from "../../../hooks/useSong";
import { Body, Title, CardCont, Artist } from "./style";
import { Card } from "../../../components/Card";

export const Main = () => {
  const { fetchSongs, songs, artists } = useSong();
  const getSongs = useCallback(async () => {
    await fetchSongs();
  }, [fetchSongs]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return (
    <>
      <Body>
        {artists &&
          artists.map((artist, i) => {
            return (
              <Artist key={i}>
                <Title>{artist}</Title>

                <CardCont>
                  {songs &&
                    songs[i]
                      ?.filter((song) => song?.artist?.name === artist)
                      ?.map((song, index) => {
                        return (
                          <>
                            <Card
                              key={index}
                              index={index}
                              id={song?.id}
                              name={song?.title_short}
                              image={song?.album.cover_medium}
                              artist={song?.artist.name}
                              artistId={i}
                            />
                          </>
                        );
                      })}
                </CardCont>
              </Artist>
            );
          })}
      </Body>
    </>
  );
};
