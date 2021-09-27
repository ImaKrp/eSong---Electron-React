import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { Routes } from "./routes/routes";
import { SessionProvider } from "./provider/Contexts/SessionContext.js";

export default function App() {
  return (
    <>
      <SessionProvider>
        <GlobalStyleProvider />
        <Routes />
      </SessionProvider>
    </>
  );
}
