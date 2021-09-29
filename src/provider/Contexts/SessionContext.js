import React, { useState, useCallback, createContext } from "react";
import { api } from "../../api/api";
import {
  changeLocalData,
  getLocalData,
  changeSessionData,
  getSessionData,
} from "../../Storage/Storage";

const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);
  const [session, setSession] = useState(
    getLocalData("@SoundCloud:User") ?? getSessionData("@SoundCloud:User")
  );
  const [genId, setGenId] = useState(0);

  function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const fetchAccounts = useCallback(async () => {
    const { data } = await api.get("/accounts");
    setAccounts(data);
    setGenId(Accounts.length + 1);
  }, [Accounts.length]);

  function LogOut() {
    localStorage.removeItem("@SoundCloud:User");
    window.sessionStorage.removeItem("@SoundCloud:User");
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
        changeSessionData({ formName: "@SoundCloud:User", object: Login[0] });
      return true;
    }

    return Login.length > 0 ? !Login[0] && "senha" : "email";
  }

  async function AddAccount(Email, Pass, Name, RemindUser) {
    let erro = 0;

    const Login = Accounts.filter((account) => account.email === Email);
    if (Login.length > 0) erro++;

    if (erro > 0) return "email";

    const name = upperFirstLetter(Name);

    const submit = {
      id: `${genId}`,
      email: `${Email}`,
      pass: `${Pass}`,
      name: `${name}`,
      pic: ``,
    };
    await api.post("/accounts", submit);

    setSession(submit);

    if (RemindUser) changeLocalData({ formName: "@SoundCloud:User", submit });
    else changeSessionData({ formName: "@SoundCloud:User", object: submit });

    return true;
  }

  async function updateUser(email, pass, name, pic, id) {
    if (pic === "https://") pic = "";
    const Name = upperFirstLetter(name);
    const submit = {
      id: `${id}`,
      email: `${email}`,
      pass: `${pass}`,
      name: `${Name}`,
      pic: `${pic}`,
    };

    await api.put(`/accounts/${id}`, submit);

    setSession(submit);

    if (getLocalData("@SoundCloud:User")) {
      changeLocalData({ formName: "@SoundCloud:User", object: submit });
    } else changeSessionData({ formName: "@SoundCloud:User", object: submit });

    return true;
  }

  return (
    <sessionContext.Provider
      value={{
        CreateSession,
        AddAccount,
        LogOut,
        fetchAccounts,
        updateUser,
        session,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
