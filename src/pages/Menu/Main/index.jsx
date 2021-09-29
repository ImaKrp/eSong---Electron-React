import React, { useCallback, useEffect, useState } from "react";
import { useSong } from "../../../hooks/useSong";
import { Body, Title, CardCont, Artist } from "./style";
import { Card } from "../../../components/Card";

export const Main = () => {
  const { fetchSongs, songs, artists } = useSong();
  const [loaded, setLoaded] = useState(false);

  const getSongs = useCallback(async () => {
    await fetchSongs();
  }, [fetchSongs]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  useEffect(() => {
    setLoaded(songs?.length === 2 ? true : false);
    if(loaded)
    console.log('a')
  }, [songs]);

  return (
    <>
      <Body>
        {loaded &&
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
