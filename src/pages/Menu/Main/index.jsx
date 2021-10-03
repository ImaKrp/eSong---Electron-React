import React, { useCallback, useEffect } from "react";
import { useSong } from "../../../hooks/useSong";
import { useQuery } from "../../../hooks/useQuery";
import { Body, Title, CardCont, Artist } from "./style";
import { Card } from "../../../components/Card";
import { Redirect } from "react-router-dom";

export const Main = () => {
  const query = useQuery();
  const { fetchSongs, songs, artists } = useSong();
  const getSongs = useCallback(async () => {
    await fetchSongs();
  }, [fetchSongs]);
  const redirect = query.get("redirect");

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return (
    <>
      <Body>
        {artists &&
          artists.map((artist, i) => {
            return (
              <Artist key={artist}>
                <Title>{artist}</Title>
                <CardCont>
                  {songs &&
                    songs[i]
                      ?.filter((song) => song?.artist?.name === artist)
                      ?.map((song, index) => {
                        return (
                          <Card
                            key={song.id}
                            index={index}
                            id={song?.id}
                            name={song?.title_short}
                            image={song?.album.cover_medium}
                            artist={song?.artist.name}
                            artistId={i}
                          />
                        );
                      })}
                </CardCont>
              </Artist>
            );
          })}
      </Body>
      {redirect && <Redirect to={`/${redirect}`} />}
    </>
  );
};
