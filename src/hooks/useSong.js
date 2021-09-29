import { useContext } from "react";
import { songContext } from "../provider/Contexts/SongContext";

export function useSong() {
  const context = useContext(songContext);
  return context;
}
