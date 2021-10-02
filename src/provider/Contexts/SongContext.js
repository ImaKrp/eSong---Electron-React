import React, { useState, useCallback, createContext } from "react";
import { songApi } from "../../api/api";

const initialState = [];
export const songContext = createContext(initialState);

export function SongProvider({ children }) {
  const [songs] = useState([]);
  const [song, setSong] = useState({});
  const [songVolume, setSongVolume] = useState(0.05);
  const [loopState, setLoopState] = useState(0);

  const artists = ["Shawn Mendes", "Chri$tian Gate$"];

  const fetchSongs = useCallback(async () => {
    const artists = ["Shawn Mendes", "Chri$tian Gate$"];
    artists.map(async (artist) => {
      const { data } = await songApi.get("/search", {
        params: { q: artist },
      });
      data.data.pop();
      if (artist === "Shawn Mendes") songs[0] = data.data.splice(4, 6);
      else songs[1] = data.data.splice(0, 6);
    });
  }, [songs]);

  const getSongByIndex = (i, index) => {
    if (!i || !index) return false;
    try {
      setSong(songs[i][index]);
    } catch {
      return true;
    }
  };

  const handleLoopState = () => {
    if (loopState === 2) {
      setLoopState(0);
      return;
    }
    setLoopState(loopState+1)
  };

  return (
    <songContext.Provider
      value={{
        fetchSongs,
        getSongByIndex,
        songs,
        song,
        artists,
        songVolume,
        setSongVolume,
        handleLoopState,
        loopState
      }}
    >
      {children}
    </songContext.Provider>
  );
}
