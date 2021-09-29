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
} from "./style";
import {Modal} from '../../../components/Modal'
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

  return (
    <>
    <Modal onClick={() => setActive(!active)} active={active}/>
      <Wrapper color={color?.hex}>
        <Infos light={color?.isLight}>
          <ImageDiv>
            <EditImage className="edit" onClick={() => setActive(!active)}>
              <img src="/icons/edit.svg" alt="editName" />
              Editar Imagem
            </EditImage>
            {session.pic ? (
              <Image src={session.pic} />
            ) : (
              <Image size="65%" src="/icons/user.svg" alt="genUserImg" />
            )}
          </ImageDiv>
          <div className="column">
            <div className="profile">PERFIL</div>
            <div className="row">
              {session.name}
              <EditName className="edit" onClick={() => setActive(!active)}>
                <img src="/icons/edit.svg" alt="editName" />
              </EditName>
            </div>
          </div>
        </Infos>
        <Content></Content>
      </Wrapper>
    </>
  );
};
