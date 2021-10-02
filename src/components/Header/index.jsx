import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  User,
  Image,
  UserSVG,
  Arrow,
  CollapseBtns,
  CollapseLinks,
  Collapse,
  Home,
  TurnOffCollapse,
} from "./style";
import { useSession } from "../../hooks/useSession";

export const Header = (props) => {
  const { LogOut, session } = useSession();
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", closeCollapse);
  });

  const closeCollapse = () => {
    setActive(false);
    document.body.removeEventListener("click", closeCollapse);
  };

  return (
    <>
      <Wrapper background={props.background}>
        <Container>
          <Home to="/">
            <img src='/icons/home.svg' alt="goToHome" />
          </Home>
        </Container>
        <Container>
          {active && <TurnOffCollapse />}
          <User className="User" onClick={() => setActive(!active)}>
            {session.pic ? (
              <Image src={session.pic} />
            ) : (
              <UserSVG>
                <img src='/icons/user.svg' alt="genUserImg" />
              </UserSVG>
            )}
            {session.name}
            <Arrow active={active} className="fas fa-sort-down"></Arrow>
          </User>
          <Collapse active={active}>
            <CollapseLinks to="/profile">Perfil</CollapseLinks>
            <CollapseBtns onClick={() => LogOut()}>Sair</CollapseBtns>
          </Collapse>
        </Container>
      </Wrapper>
    </>
  );
};
