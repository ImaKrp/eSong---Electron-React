import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000059;
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  width: 52rem;
  height: 32rem;
  background-color: var(--b100);
  position: absolute;
  z-index: 5;
  border-radius: 0.8rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: var(--white);
    font-size: 2.2rem;
  }

  .first {
    margin: 0 0 2.4rem 0;
  }
  .last {
    flex: 1;
    align-items: center;
    gap: 1.6rem;
  }
`;

export const CloseBtn = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  background-color: var(--b100);
  border-radius: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    width: 90%;
  }

  &:hover {
    background-color: var(--b700);
  }
`;

export const ImageDiv = styled.div`
  width: 18rem;
  height: 18rem;
  background-color: var(--b700);
  border-radius: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img`
  width: ${({ size }) => (size ? size : "100%")};
  height: ${({ size }) => (size ? size : "100%")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  flex: 1;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  label {
    margin-left: 0.5rem;
    font-size: 1.3rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  background-color: var(--b700);
  padding: 0 12px;
  display: flex;
  align-items: center;
  color: var(--w200);
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid
    ${({ isOnError }) => (isOnError ? "var(--red)" : "var(--b700)")};

  &:focus {
    border: 1px solid
      ${({ isOnError }) => (isOnError ? "var(--red)" : "var(--b500)")};
  }
`;

export const Submit = styled.button`
  width: 11rem;
  background-color: var(--w200);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  font-size: 1.3rem;
  letter-spacing: 2px;
  font-weight: 800;
  height: 3.2rem;
  border-radius: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--white);
  }
`;

export const SpanError = styled.span`
  color: var(--blue);
  font-size: 1.4rem;
  font-weight: 300;
  user-select: none;
`;
