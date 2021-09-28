import React, { useState, useCallback, createContext } from "react";
import { api } from "../../api/api";
import { changeLocalData, getLocalData } from "../../LocalStorage/LocalStorage";

const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);
  const [session, setSession] = useState(
    getLocalData("@SoundCloud:User") ??
      JSON.parse(window.sessionStorage.getItem("@SoundCloud:User"))
  );
  const [genId, setGenId] = useState(0);

  const fetchAccounts = useCallback(async () => {
    const { data } = await api.get("/accounts");
    setAccounts(data);
    setGenId(Accounts.length + 1);
  }, [Accounts.length]);

  function onGoingSession() {
    return session;
  }

  function LogOut() {
    localStorage.removeItem("@SoundCloud:User");
    setSession();
  }

  async function CreateSession(Email, Pass, RemindUser) {
    const Login = Accounts.filter((account) => account.email === Email).map(
      (account) => (account.pass === Pass ? account : false)
    );

    if (Login[0]) {
      setSession(Login[0]);
      if (RemindUser)
        changeLocalData({ formName: "@SoundCloud:User", object: Login[0] });
      else
        window.sessionStorage.setItem(
          "@SoundCloud:User",
          JSON.stringify(Login[0])
        );
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

    changeLocalData({
      formName: "@SoundCloud:User",
      object: {
        id: `${genId}`,
        email: `${Email}`,
        pass: `${Pass}`,
        name: `${Name}`,
        pic: `${Picture}`,
      },
    });
    return true;
  }

  return (
    <sessionContext.Provider
      value={{
        onGoingSession,
        CreateSession,
        AddAccount,
        LogOut,
        fetchAccounts,
        session,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
