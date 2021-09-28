import React, { useState } from "react";
import {
  Wrapper,
  Container,
  User,
  Image,
  UserSVG,
  Arrow,
  CollapseBtns,
  Collapse,
} from "./style";
import { useSession } from "../../hooks/useSession";

export const Header = () => {
  const { LogOut, session } = useSession();
  const [active, setActive] = useState(false);
  console.log(session)
  return (
    <>
      <Wrapper>
        <Container></Container>
        <Container>
          <User onClick={() => setActive(!active)}>
            {session.pic ? (
              <Image src={session.pic} />
            ) : (
              <UserSVG>
                <img src="/icons/user.svg" alt="genUserImg" />
              </UserSVG>
            )}
            {session.name}
            <Arrow active={active} className="fas fa-sort-down"></Arrow>
          </User>
          <Collapse active={active}>
            <CollapseBtns onClick={() => LogOut()}>Sair</CollapseBtns>
          </Collapse>
        </Container>
      </Wrapper>
    </>
  );
};
