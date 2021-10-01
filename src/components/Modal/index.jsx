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
  const [newPicture, setNewPicture] = useState(session.pic ?? "https://");
  const [newPictureError, setNewPictureError] = useState("");
  const [name, setName] = useState(session.name);
  const [nameError, setNameError] = useState("");

  const handleNameChange = (value) => {
    setName(value);
    setNameError(value ? "" : "⨉ Insira um nome de exibição.");
  };

  const handlePictureChange = (value) => {
    setNewPicture(value);
    if (value === "" || value === "https://") {
      setNewPictureError();
      return;
    }

    function isImgLink(url) {
      if (typeof url !== "string") return false;
      return url.match(/^http[^]*.(jpeg|jpg|gif|png|svg)((.*))?$/gim) != null;
    }

    setNewPictureError(
      isImgLink(value) ? "" : "⨉ Insira uma url válida ou a remova."
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let error = 0;

    if (!name) {
      setNameError("⨉ Insira um nome de exibição.");
      error++;
    }

    if (newPictureError) error++;

    if (error > 0) return;
    await updateUser(session.email, session.pass, name, newPicture, session.id);
    props.onClick();
  };

  const imgPath =
    "https://raw.githubusercontent.com/ImaKrp/eSong---Electron-React/7b5645222478d5a94b6d18bd76a60660d9bb3d68/public/icons/";

  return (
    <>
      {props.active && (
        <>
          <Wrapper>
            <ModalWrapper>
              <div className="row first">
                <span>Detalhes do perfil</span>
                <CloseBtn onClick={props.onClick}>
                  <img src={`${imgPath}close.svg`} alt="closeModal" />
                </CloseBtn>
              </div>
              <div className="row last">
                <ImageDiv>
                  {newPictureError ? (
                    <>
                      {session.pic ? (
                        <Image src={session.pic} />
                      ) : (
                        <Image
                          size="65%"
                          src={`${imgPath}user.svg`}
                          alt="genUserImg"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {newPicture !== "" && newPicture !== "https://" ? (
                        <Image src={newPicture} />
                      ) : (
                        <>
                          {session.pic ? (
                            <Image src={session.pic} />
                          ) : (
                            <Image
                              size="65%"
                              src={`${imgPath}user.svg`}
                              alt="genUserImg"
                            />
                          )}
                        </>
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
                      isOnError={newPictureError}
                      value={newPicture}
                      onChange={(e) => handlePictureChange(e.target.value)}
                    />
                    {newPictureError && (
                      <SpanError>{newPictureError}</SpanError>
                    )}
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
