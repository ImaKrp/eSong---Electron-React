import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Body = styled.div`
  width: 100vw;
  height: 100%;
  padding: 32px 24px 0 24px;
`;

export const Title = styled.div`
  font-size: 2rem;
  color: var(--white);
  font-weight: 600;
  margin-bottom: 1.6rem;
`;

export const CardCont = styled.div`
  width: 100%;
  min-height: 25rem;
  gap: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export const Artist = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  user-select: none;
`;
