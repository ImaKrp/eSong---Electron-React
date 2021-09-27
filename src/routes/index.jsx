import React from "react";
import { AppRoutes } from "./App.routes";
import { LogRoutes } from "./Log.routes";
import { useSession } from "../hooks/useSession";

export function Routes() {
  const { session } = useSession();
  const isLoggedIn = session;
  if (isLoggedIn) return <AppRoutes />;
  return <LogRoutes />;
}
