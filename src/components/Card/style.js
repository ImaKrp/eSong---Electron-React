import styled from "styled-components";
import { Link } from "react-router-dom";

export const Play = styled(Link)`
  position: absolute;
  display: flex;
  bottom: 2.3rem;
  right: 0.7rem;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: var(--blue);
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  transform: scale(0);

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.4rem;
  margin-bottom: 1.5rem;
  box-shadow: 0px 2px 15px -3px #000000bf;
`;

export const Wrapper = styled.div`
  width: 18rem;
  height: 25rem;
  background-color: var(--b600);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.4rem;
  padding: 16px;
  border-radius: 0.4rem;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: var(--b700);
    transform: translateY(-0.5rem);
    box-shadow: 0 16px 24px rgb(0 0 0 / 10%), 0 6px 8px rgb(0 0 0 / 5%);
  }

  &:hover ${Play} {
    transform: scale(1);
  }
  ${Play}:hover {
    transform: scale(1.1);
  }
`;

export const SongName = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--white);
  max-width: 148px;
  max-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artist = styled.span`
  font-size: 1.4rem;
  font-weight: thin;
  color: #7c7c7c;
`;
