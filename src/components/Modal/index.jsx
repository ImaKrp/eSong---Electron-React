import React, { useState } from "react";
import {
  Wrapper,
  ModalWrapper,
  CloseBtn,
  ImageDiv,
  Image,
  Form,
  Input,
  Submit,
  SpanError,
} from "./style";
import { useSession } from "../../hooks/useSession";

export const Modal = (props) => {
  const { session, updateUser } = useSession();
  const [newPicture, setNewPicture] = useState("https://");
  const [name, setName] = useState(session.name);
  const [nameError, setNameError] = useState("");

  const handleNameChange = (value) => {
    setName(value);
    setNameError(value ? "" : "⨉ Insira um nome de exibição.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let error = 0;

    if (!name) {
      setNameError("⨉ Insira um nome de exibição.");
      error++;
    }

    if (error > 0) return;
    await updateUser(session.email, session.pass, name, newPicture, session.id);
  };

  return (
    <>
      {props.active && (
        <>
          <Wrapper>
            <ModalWrapper>
              <div className="row first">
                <span>Detalhes do perfil</span>
                <CloseBtn onClick={props.onClick}>
                  <img src="/icons/close.svg" alt="closeModal" />
                </CloseBtn>
              </div>
              <div className="row last">
                <ImageDiv>
                  {newPicture !== "" && newPicture !== "https://" ? (
                    <Image src={newPicture} />
                  ) : (
                    <>
                      {session.pic ? (
                        <Image src={session.pic} />
                      ) : (
                        <Image
                          size="65%"
                          src="/icons/user.svg"
                          alt="genUserImg"
                        />
                      )}
                    </>
                  )}
                </ImageDiv>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <div>
                    <label>Nome de Exibição</label>
                    <Input
                      placeholder="Adicionar um nome de exibição."
                      type="text"
                      isOnError={nameError}
                      value={name}
                      onChange={(e) => handleNameChange(e.target.value)}
                    />
                    {nameError && <SpanError>{nameError}</SpanError>}
                  </div>
                  <div>
                    <label>Imagem</label>
                    <Input
                      placeholder="Adicionar uma url de imagem."
                      type="text"
                      value={newPicture}
                      onChange={(e) => setNewPicture(e.target.value)}
                    />
                  </div>
                  <Submit type="submit">SALVAR</Submit>
                </Form>
              </div>
            </ModalWrapper>
            <Wrapper onClick={props.onClick}></Wrapper>
          </Wrapper>
        </>
      )}
    </>
  );
};
