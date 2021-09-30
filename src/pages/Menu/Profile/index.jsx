import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "../../../hooks/useSession";
import {
  Image,
  ImageDiv,
  Wrapper,
  Infos,
  Content,
  EditName,
  EditImage,
  GoToMenu,
} from "./style";
import { Modal } from "../../../components/Modal";
import FastAverageColor from "fast-average-color";

export const Profile = () => {
  const { session } = useSession();
  const [color, setColor] = useState();
  const [active, setActive] = useState(false);
  const getColor = useCallback(() => {
    if (!session.pic) return;
    const avgColor = new FastAverageColor();
    avgColor.getColorAsync(session.pic).then((color) => {
      setColor(color);
    });
  }, [session.pic]);

  useEffect(() => {
    getColor();
  }, [getColor]);

  const imgPath =
  "https://raw.githubusercontent.com/ImaKrp/eSong---Electron-React/7b5645222478d5a94b6d18bd76a60660d9bb3d68/public/icons/";

  return (
    <>
      <Modal onClick={() => setActive(!active)} active={active} />
      <Wrapper color={color?.hex}>
        <Infos light={color?.isLight}>
          <ImageDiv>
            <EditImage className="edit" onClick={() => setActive(!active)}>
              <img src={`${imgPath}edit.svg`} alt="editName" />
              Editar Imagem
            </EditImage>
            {session.pic ? (
              <Image src={session.pic} />
            ) : (
              <Image size="65%" src={`${imgPath}user.svg`} alt="genUserImg" />
            )}
          </ImageDiv>
          <div className="column">
            <div className="profile">PERFIL</div>
            <div className="row">
              {session.name}
              <EditName className="edit" onClick={() => setActive(!active)}>
                <img src={`${imgPath}edit.svg`} alt="editName" />
              </EditName>
            </div>
          </div>
        </Infos>
        <Content>
          <GoToMenu to="/">SUAS MÚSICAS</GoToMenu>
        </Content>
      </Wrapper>
    </>
  );
};
