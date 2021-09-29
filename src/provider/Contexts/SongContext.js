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

  async function getSongById(id) {
    const { data } = await songApi.get(`/track/${id}`);
    setSong(data);
  }

  return (
    <songContext.Provider
      value={{
        fetchSongs,
        getSongById,
        songs,
        song,
      }}
    >
      {children}
    </songContext.Provider>
  );
}
