import React, { useCallback, useEffect } from "react";
import { useSong } from "../../../hooks/useSong";
import { Body, Title, CardCont, Artist } from "./style";
import { Card } from "../../../components/Card";

export const Main = () => {
  const { fetchSongs, songs } = useSong();

  const getSongs = useCallback(async () => {
    try {
      await fetchSongs();
    } catch (err) {
    }
  }, [fetchSongs]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return (
    <>
      <Body>
        <Artist>
          <Title>Shawn Mendes</Title>
          <CardCont>
            {songs &&
              songs.length > 0 &&
              songs.map((song, index) => {
                return (
                  <Card
                    key={index}
                    index={index}
                    id={song.id}
                    name={song.title_short}
                    image={song.album.cover_medium}
                    artist={song.artist.name}
                  />
                );
              })}
          </CardCont>
        </Artist>
      </Body>
    </>
  );
};
