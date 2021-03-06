import styled from "styled-components";
import { Link } from "react-router-dom";

export const EditImage = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--white);
  width: 18rem;
  height: 18rem;
  transition: opacity 0.3s;
  background-color: #000000a6;
  border-radius: 8.95rem;
  user-select: none;
  opacity: 0;
  pointer-events: none;
  cursor: default;
  img {
    width: 6rem;
  }
`;

export const ImageDiv = styled.div`
  width: 18rem;
  height: 18rem;
  background-color: var(--b600);
  border-radius: 11.5rem;
  overflow: hidden;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;

  &:hover ${EditImage} {
    opacity: 1;
    pointer-events: all;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: ${({ size }) => (size ? size : "100%")};
  height: ${({ size }) => (size ? size : "100%")};
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 34rem;
  background-image: linear-gradient(
    to bottom,
    ${({ color }) => (color ? color : "rgb(83, 83, 83)")},
    #00000000
  );
  display: flex;
  align-items: top;
  justify-content: flex-start;
  padding: 3.5rem 4rem;
`;

export const EditName = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  height: 5rem;
  transition: opacity 0.3s;
  width: 5rem;
  user-select: none;
  opacity: 0;
  pointer-events: none;
  cursor: default;
  margin-top: 2.35rem;
  img {
    width: 4rem;
  }
`;

export const Infos = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  margin-bottom: 3.5rem;
  .column {
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    color: var(--white);
    font-weight: 700;
    font-size: 7rem;
    padding-bottom: 1.5rem;
    user-select: none;

    .profile {
      font-size: 1.4rem;
    }

    .row {
      display: flex;
      gap: 1rem;
      width: fit-content;
      &:hover ${EditName} {
        opacity: 1;
        pointer-events: all;
        cursor: pointer;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100vw;
  height: calc(100vh - 30rem);
  position: absolute;
  left: 0;
  top: 30rem;
  background-color: rgba(0, 0, 0, 0.33);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoToMenu = styled(Link)`
  width: 27.5rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2.4rem;
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: bold;
  background-color: var(--w200);
  transition: background-color 0.3s;
  color: var(--black);
  transition: background-color 0.3s;
  user-select: none;

  &:hover {
    background-color: var(--white);
  }
`;
