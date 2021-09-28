import styled from "styled-components";
// import { Link } from "react-router-dom";

export const LogBtn = styled.button`
  height: 4.8rem;
  width: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2.4rem;
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: 600;
  background-color: var(--purple);
  transition: filter 0.3s;
  color: var(--white);
  user-select: none;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Header = styled.header`
  width: 100vw;
  height: 5rem;
  background-color: var(--black);
`;
