import React, { useState, useCallback, createContext } from "react";
import { userApi } from "../../api/api";
import {
  changeLocalData,
  getLocalData,
  changeSessionData,
  getSessionData,
} from "../../Storage/Storage";

const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([
    {
      id: 1,
      email: "teste@gmail.com",
      pass: "123",
      name: "Teste",
      pic: "https://64.media.tumblr.com/7031561507aa20b65087c7812ace806c/ea95d609d48498c5-e5/s2048x3072/e948e9677edaa3caed15be26dff8d21b11624546.jpg",
    },
  ]);
  const [session, setSession] = useState(
    getLocalData("@eSong:User") ?? getSessionData("@eSong:User")
  );
  const [genId, setGenId] = useState(0);
  const [logged, setLogged] = useState(session ? true : false);

  function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const fetchAccounts = useCallback(async () => {
    const { data } = await userApi.get("/accounts");
    setAccounts(data);
    setGenId(Accounts.length + 1);
  }, [Accounts.length]);

  function LogOut() {
    localStorage.removeItem("@eSong:User");
    window.sessionStorage.removeItem("@eSong:User");
    setSession();
    setLogged();
  }

  async function CreateSession(Email, Pass, RemindUser) {
    const Login = Accounts.filter((account) => account.email === Email).map(
      (account) => (account.pass === Pass ? account : false)
    );

    if (Login[0]) {
      setSession(Login[0]);
      if (RemindUser)
        changeLocalData({ formName: "@eSong:User", object: Login[0] });
      else changeSessionData({ formName: "@eSong:User", object: Login[0] });
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
    await userApi.post("/accounts", submit);

    setSession(submit);

    if (RemindUser) changeLocalData({ formName: "@eSong:User", submit });
    else changeSessionData({ formName: "@eSong:User", object: submit });

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

    await userApi.put(`/accounts/${id}`, submit);

    setSession(submit);

    if (getLocalData("@eSong:User")) {
      changeLocalData({ formName: "@eSong:User", object: submit });
    } else changeSessionData({ formName: "@eSong:User", object: submit });

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
        logged,
        setLogged,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
