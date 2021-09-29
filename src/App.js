import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { Routes } from "./routes";
import { SessionProvider } from "./provider/Contexts/SessionContext.js";
import { SongProvider } from "./provider/Contexts/SongContext.js";

export default function App() {
  return (
    <>
      <SessionProvider>
        <SongProvider>
          <GlobalStyleProvider />
          <Routes />
        </SongProvider>
      </SessionProvider>
    </>
  );
}
