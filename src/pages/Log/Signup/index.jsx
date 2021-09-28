import React, { useState, useEffect, useCallback } from "react";
import {
  Form,
  Input,
  InputDiv,
  Label,
  Row,
  SignBtn,
  SpanError,
  Remind,
  Check,
  Content,
  Login,
  LoginSpan,
  Eye,
  ServerToast,
} from "./style";
import { useSession } from "../../../hooks/useSession";

export const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyEmailError, setVerifyEmailError] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyPasswordError, setVerifyPasswordError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [remindUser, setRemindUser] = useState(true);
  const [visibility1, setVisibility1] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const { AddAccount, fetchAccounts } = useSession();

  const testServer = useCallback(async () => {
    try {
      await fetchAccounts();
    } catch (err) {
      if (err.toString() === "Error: Network Error")
        setServerError(
          "Error: Couldn't Connect to Server http://localhost:8000"
        );
      return err.toString();
    }
  }, [fetchAccounts]);

  useEffect(() => {
    testServer();
  }, [testServer]);

  const handleNameChange = (value) => {
    setName(value);
    setNameError(value ? "" : "⨉ Insira um nome para seu perfil.");
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Você deve inserir seu e-mail.");
  };

  const handleVerifyEmailChange = (value) => {
    setVerifyEmail(value);
    setVerifyEmailError(
      value
        ? value === email
          ? ""
          : "⨉ Os endereços de e-mail não correspondem."
        : "⨉ Você deve confirmar seu e-mail."
    );
  };

  const handleVerifyPasswordChange = (value) => {
    setVerifyPassword(value);
    setVerifyPasswordError(
      value
        ? value === password
          ? ""
          : "⨉ As senhas não correspondem."
        : "⨉ Você deve confirmar sua senha."
    );
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value ? "" : "⨉ Você precisa inserir uma senha.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverStatus = await testServer();
    if (serverStatus) {
      setServerError("Error: Couldn't Connect to Server http://localhost:8000");
      return;
    }

    let error = 0;

    if (verifyEmailError) error++;

    if (verifyPasswordError) error++;

    if (!name) {
      setNameError("⨉ Insira um nome para seu perfil.");
      error++;
    }

    if (!password) {
      setPasswordError("⨉ Por favor, insira sua senha.");
      error++;
    }

    if (!email) {
      setEmailError("⨉ Insira seu endereço de e-mail do SoundCloud.");
      error++;
    }

    if (!verifyPassword) {
      setEmailError("⨉ Você deve confirmar sua senha.");
      error++;
    }

    if (!verifyEmail) {
      setEmailError("⨉ Você deve confirmar seu e-mail.");
      error++;
    }

    if (verifyPassword !== password) {
      setVerifyPasswordError("⨉ As senhas não correspondem.");
      error++;
    }

    if (verifyEmail !== email) {
      setVerifyEmailError("⨉ Os endereços de e-mail não correspondem.");
      error++;
    }

    if (error > 0) return;

    setEmailError();
    setPasswordError();
    const resp = await AddAccount(email, password, name, remindUser);
    if (resp !== true) {
      if (resp === "email") setEmailError("⨉ E-mail já cadastrado.");
    }
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {serverError && <ServerToast>{serverError}</ServerToast>}
        <div>
          <Label>Qual é o seu e-mail?</Label>
          <Input
            placeholder="Insira seu endereço de e-mail."
            type="email"
            isOnError={emailError}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          {emailError && <SpanError>{emailError}</SpanError>}
        </div>
        <div>
          <Label>Confirme seu e-mail</Label>
          <Input
            placeholder="Insira novamente seu endereço de e-mail."
            type="email"
            isOnError={verifyEmailError}
            value={verifyEmail}
            onChange={(e) => handleVerifyEmailChange(e.target.value)}
          />
          {verifyEmailError && <SpanError>{verifyEmailError}</SpanError>}
        </div>
        <div>
          <Label>Crie uma senha</Label>
          <InputDiv>
            <Input
              placeholder="Crie uma senha."
              type={visibility1 ? "text" : "password"}
              isOnError={passwordError}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <Eye type="button" onClick={() => setVisibility1(!visibility1)}>
              {visibility1 ? (
                <i className="far fa-eye"></i>
              ) : (
                <i className="far fa-eye-slash"></i>
              )}
            </Eye>
          </InputDiv>
          {passwordError && <SpanError>{passwordError}</SpanError>}
        </div>
        <div>
          <Label>Confirme sua senha</Label>
          <InputDiv>
            <Input
              placeholder="Insira novamente sua senha."
              type={visibility2 ? "text" : "password"}
              isOnError={verifyPasswordError}
              value={verifyPassword}
              onChange={(e) => handleVerifyPasswordChange(e.target.value)}
            />
            <Eye type="button" onClick={() => setVisibility2(!visibility2)}>
              {visibility2 ? (
                <i className="far fa-eye"></i>
              ) : (
                <i className="far fa-eye-slash"></i>
              )}
            </Eye>
          </InputDiv>
          {verifyPasswordError && <SpanError>{verifyPasswordError}</SpanError>}
        </div>
        <div>
          <Label>Como devemos chamar você?</Label>
          <Input
            placeholder="Insira seu nome de perfil."
            type="text"
            isOnError={nameError}
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
          {nameError && <SpanError>{nameError}</SpanError>}
        </div>
        <Row width="45rem" justify="space-between" margin="2rem 0 0 0">
          <Row gap="1rem">
            <Check
              checked={remindUser}
              type="button"
              onClick={() => setRemindUser(!remindUser)}
            >
              {remindUser && "✔"}
            </Check>
            <Remind>Lembrar de mim</Remind>
          </Row>
          <SignBtn type="submit">INSCREVER-SE</SignBtn>
        </Row>
      </Form>
      <Content>
        <LoginSpan>
          Já tem uma conta?
          <Login to="/login"> Faça login</Login>.
        </LoginSpan>
      </Content>
    </>
  );
};
