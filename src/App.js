import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { Login } from "./pages/LogIn/LogIn";

export default function App() {
  return (
    <>
      <GlobalStyleProvider />
      <Login />
    </>
  );
}
