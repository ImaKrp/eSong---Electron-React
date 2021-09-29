import styled from "styled-components";
import { Link } from "react-router-dom";

export const PlayerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 4rem;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const Body = styled.div`
  width: 100vw;
  height: 39rem;
  background-image: linear-gradient(
    to bottom,
    ${({ color }) => (color ? color : "rgb(83, 83, 83)")},
    #00000000
  );
  display: flex;
  align-items: top;
  justify-content: flex-start;
  padding: 3.5rem 4rem;
  position: absolute;
  top: 0;
  z-index: 0;
`;

export const Content = styled.div`
  width: 100vw;
  height: calc(100vh - 30rem);
  position: absolute;
  left: 0;
  top: 30rem;
  background-color: rgba(0, 0, 0, 0.33);
`;

export const ModalWrapper = styled.div`
  width: 33rem;
  height: 60rem;
  background-color: var(--b100);
  position: absolute;
  z-index: 5;
  border-radius: 0.8rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);

  .column {
    width: 100%;
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    h3 {
      font-size: 2.2rem;
      font-weight: bold;
      color: var(--white);
      max-width: 100%;
    }
    span {
      font-size: 1.6rem;
      font-weight: thin;
      color: #7c7c7c;
      margin-bottom: 2.4rem;
    }
  }

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 1.2rem;
      font-weight: thin;
      color: #7c7c7c;
      padding: 0.3rem 0.8rem;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.4rem;
  margin-bottom: 2.4rem;
  box-shadow: 0px 2px 15px -3px #000000bf;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  box-shadow: 0px 2px 15px -3px #000000bf;
  height: 0.4rem;
  width: 100%;
  background-color: var(--b700);
  position: relative;
`;

export const Slider = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 0.4rem;
  background-color: var(--blue);
  position: absolute;
`;

export const Play = styled.button`
  display: flex;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 3rem;
  background-color: var(--blue);
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  cursor: pointer;

  img {
    width: 2.7rem;
    height: 2.7rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const NextSong = styled(Link)`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: transform 0.3s;

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const PrevSong = styled(Link)`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: transform 0.3s;

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Controlers = styled.div`
  width: 100%;
  margin-top: 1.4rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.3rem;
`;
