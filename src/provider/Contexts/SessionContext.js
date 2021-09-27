import React, { useState, useEffect, useCallback, createContext } from "react";
import { api } from "../../api/api";
import { changeLocalData, getLocalData } from "../../LocalStorage/LocalStorage";

const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);
  const [session, setSession] = useState(
    getLocalData("@SoundCloud:User") ?? {}
  );
  const [isLogged, setIsLogged] = useState(false);
  const [genId, setGenId] = useState(0);

  useEffect(() => {
    if (session) {
      LogIn();
    } else LogOut();
  }, [session]);

  const fetchAccounts = useCallback(async () => {
    const { data } = await api.get("/accounts");
    setAccounts(data);
    setGenId(Accounts.length + 1);
  }, [Accounts.length]);

  function onGoingSession() {
    return session;
  }

  function isItLogged() {
    return isLogged;
  }

  function LogIn() {
    setIsLogged(true);
  }

  function LogOut() {
    setIsLogged(false);
    changeLocalData({ formName: "@SoundCloud:User", object: {} });
    setSession({});
  }

  async function CreateSession(Email, Pass, RemindUser) {
    const Login = Accounts.filter((account) => account.email === Email).map(
      (account) => (account.pass === Pass ? account : false)
    );

    if (Login[0]) {
      setSession(Login[0]);
      if (RemindUser)
        changeLocalData({ formName: "@SoundCloud:User", object: session });
      LogIn();
      return true;
    }

    return Login.length > 0 ? !Login[0] && "senha" : "email";
  }

  async function AddAccount(Email, Pass, Name, Picture) {
    let erro = 0;

    const Login = Accounts.filter((account) => account.email === Email);
    if (Login.length > 0) erro++;

    if (erro > 0) return false;

    await api.post("/accounts", {
      id: `${genId}`,
      email: `${Email}`,
      pass: `${Pass}`,
      name: `${Name}`,
      pic: `${Picture}`,
    });

    setSession({
      id: `${genId}`,
      email: `${Email}`,
      pass: `${Pass}`,
      name: `${Name}`,
      pic: `${Picture}`,
    });
    LogIn();

    return true;
  }

  return (
    <sessionContext.Provider
      value={{
        onGoingSession,
        isItLogged,
        CreateSession,
        LogIn,
        AddAccount,
        LogOut,
        fetchAccounts,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
