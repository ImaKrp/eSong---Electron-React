import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 6rem;
  margin-bottom: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: var(--purple);
  background-color: var(--black);

  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 3.3rem;
    user-select: none;
  }

  span {
    font-family: "Lato", sans-serif;
    font-size: 1.6rem;
    top: 25%;
    position: absolute;
    user-select: none;
  }
`;

export const Logo = styled.img`
  width: 3rem;
  user-select: none;
`;

export const Body = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--b100);
  overflow-x: hidden;
`;
