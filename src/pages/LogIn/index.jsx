import React, { useState } from "react";
import {
  Form,
  Input,
  InputDiv,
  Label,
  Row,
  LogBtn,
  SpanError,
  Remind,
  Check,
  Content,
  SignUp,
  SignUpSpan,
  Eye,
} from "./style";

export const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [remindUser, setRemindUser] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError(value ? "" : "Insira seu endereço de e-mail do SoundCloud.");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(value ? false : true);
    setPasswordError(value ? "" : "Por favor, insira sua senha.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <Label>Endereço de e-mail</Label>
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
          {passwordError && <SpanError>Por favor, insira sua senha.</SpanError>}
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
          <LogBtn type="submit">ENTRAR</LogBtn>
        </Row>
      </Form>
      <Content>
        <SignUpSpan>Não tem uma conta?</SignUpSpan>
        <SignUp>Inscrever-se no SoundCloud</SignUp>
      </Content>
    </>
  );
};
