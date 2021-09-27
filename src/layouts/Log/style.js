import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 8rem;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: var(--purple);

  &::after {
    content: "";
    background-color: lightgray;
    position: absolute;
    height: 1px;
    width: 100vw;
    bottom: 0;
    background-color: var(--b400);
  }

  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 4rem;
  }

  span {
    font-family: "Lato", sans-serif;
    font-size: 1.8rem;
    top: 33%;
    position: absolute;
  }
`;

export const Logo = styled.img`
  width: 4rem;
`;

export const Body = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--black);
  overflow-x: hidden;
`;
