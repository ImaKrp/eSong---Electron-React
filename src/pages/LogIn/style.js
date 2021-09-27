import styled from "styled-components";

export const Content = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 45rem;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  font-size: 1.6rem;
  border: 1px solid var(--b400);
  background-color: var(--b100);
  color: var(--white);
`;
