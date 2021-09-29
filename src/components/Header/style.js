import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const Wrapper = styled.header`
  width: 100vw;
  height: 5rem;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  top: 0;
`;

export const Container = styled.div`
  width: fit-content;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const User = styled.button`
  width: fit-content;
  height: 3.1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: var(--b600);
  border-radius: 1.5rem;
  color: var(--white);
  padding-right: 1rem;
  padding-left: 0.2rem;
  font-size: 1.5rem;
  font-weight: medium;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--b700);
  }
`;

export const Image = styled.img`
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 1.35rem;
`;

export const UserSVG = styled.div`
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 1.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
  }
`;

export const Arrow = styled.i`
  height: 1.8rem;
  transform: rotate(${({ active }) => (active ? `180deg` : "0deg")});
  transition: transform 0.5s;
`;

export const CollapseBtns = styled.button`
  display: flex;
  width: 100%;
  user-select: none;
  text-align: start;
  padding: 12px;
  font-size: 1.4rem;
  justify-content: space-between;
  color: var(--white);
  display: flex;
  transition: background-color 0.3s;
  background-color: var(--b600);
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    background-color: var(--b700);
  }
`;

export const CollapseLinks = styled(Link)`
  display: flex;
  width: 100%;
  user-select: none;
  text-align: start;
  padding: 12px;
  font-size: 1.4rem;
  justify-content: space-between;
  color: var(--white);
  display: flex;
  transition: background-color 0.3s;
  background-color: var(--b600);
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    background-color: var(--b700);
  }
`;

export const Collapse = styled.div`
  display: ${({ active }) => (active ? `flex` : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--b600);
  padding: 4px;
  border-radius: 4px;
  width: 24rem;
  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  position: absolute;
  bottom: -9.4rem;
  right: 0;
`;

export const Home = styled(Link)`
  width: 3.1rem;
  height: 3.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--b600);
  border-radius: 1.5rem;
  color: var(--white);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--b700);
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
  }
`;

export const TurnOffCollapse = styled.div`
  height: 3.1rem;
  width: 100%;
  position: absolute;
  cursor: pointer;

  &:hover ~ .User {
    background-color: var(--b700);
  }
`;
