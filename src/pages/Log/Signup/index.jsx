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
  const [remindUser, setRemindUser] = useState(true);
  const [visibility, setVisibility] = useState(false);
  const { CreateSession, fetchAccounts } = useSession();

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

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "Insira seu endereço de e-mail do SoundCloud.");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value ? "" : "Por favor, insira sua senha.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverStatus = await testServer();
    if (serverStatus) {
      setServerError("Error: Couldn't Connect to Server http://localhost:8000");
      return;
    }

    if (!email && !password) {
      setEmailError("Insira seu endereço de e-mail do SoundCloud.");
      setPasswordError("Por favor, insira sua senha.");
      return;
    }
    if (!password) {
      setPasswordError("Por favor, insira sua senha.");
      return;
    }
    if (!email) {
      setEmailError("Insira seu endereço de e-mail do SoundCloud.");
      return;
    }
    setEmailError();
    setPasswordError();
    const resp = await CreateSession(email, password, remindUser);
    if (resp !== true) {
      if (resp === "senha") setPasswordError("Senha incorreta.");

      if (resp === "email") setEmailError("Email não Cadastrado.");
    }
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {serverError && <ServerToast>{serverError}</ServerToast>}
        <div>
          <Label>OOOOII</Label>
          <Input
            placeholder="Endereço de e-mail"
            type="email"
            isOnError={emailError}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          {emailError && <SpanError>{emailError}</SpanError>}
        </div>
        <div>
          <Label>Senha</Label>
          <InputDiv>
            <Input
              placeholder="Senha"
              type={visibility ? "text" : "password"}
              isOnError={passwordError}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <Eye type="button" onClick={() => setVisibility(!visibility)}>
              {visibility ? (
                <i className="far fa-eye"></i>
              ) : (
                <i className="far fa-eye-slash"></i>
              )}
            </Eye>
          </InputDiv>
          {passwordError && <SpanError>{passwordError}</SpanError>}
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
