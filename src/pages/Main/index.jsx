import React from "react";
import { LogBtn } from "./style";
import { useSession } from "../../hooks/useSession";

export const Main = () => {
  const { LogOut } = useSession();
  return (
    <>
      <LogBtn type="button" onClick={() => LogOut()}>
        SAIR
      </LogBtn>
    </>
  );
};
