import { useContext } from "react";
import { sessionContext } from "../provider/Contexts/SessionContext";

export function useSession() {
  const context = useContext(sessionContext);
  return context;
}
