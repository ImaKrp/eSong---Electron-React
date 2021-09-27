import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { Login } from "./pages/LogIn";
import { Log } from "./layouts/Log";

export default function App() {
  return (
    <>
      <GlobalStyleProvider />
      <Log>
        <Login />
      </Log>
    </>
  );
}
