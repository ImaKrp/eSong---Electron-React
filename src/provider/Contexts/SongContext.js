import React, { useState, useCallback, createContext } from "react";
import { songApi } from "../../api/api";

const initialState = [];
export const songContext = createContext(initialState);

export function SongProvider({ children }) {
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState({});

  const fetchSongs = useCallback(async () => {
    const { data } = await songApi.get("/search", {
      params: { q: "Shawn Mendes" },
    });
    data.data.pop();
    setSongs(data.data.splice(4, 6));
  }, []);

  const getSongByIndex = (index) => {
    setSong(songs[index]);
  };

  return (
    <songContext.Provider
      value={{
        fetchSongs,
        getSongByIndex,
        songs,
        song,
      }}
    >
      {children}
    </songContext.Provider>
  );
}
