import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { Routes } from "./routes/routes";

export default function App() {
  return (
    <>
      <GlobalStyleProvider />
      <Routes />
    </>
  );
}
