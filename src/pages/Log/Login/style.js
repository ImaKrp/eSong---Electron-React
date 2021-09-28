import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  margin-bottom: 4rem;
  &::after {
    content: "";
    background-color: lightgray;
    position: absolute;
    height: 1px;
    width: 45rem;
    bottom: -2rem;
    background-color: var(--b400);
  }
`;

export const Input = styled.input`
  width: 45rem;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  font-size: 1.6rem;
  border: 1px solid
    ${({ isOnError }) => (isOnError ? "var(--red)" : "var(--b200)")};
  background-color: var(--b100);
  color: var(--w200);
  transition: border 0.3s, box-shadow 0.3s;
  font-weight: 300;

  &:focus {
    border: 1px solid var(--purple);
    box-shadow: 0 0 0 1px #705d9766;
  }

  &::placeholder {
    color: var(--w400);
    font-weight: 300;
    user-select: none;
  }
`;

export const InputDiv = styled.div`
  width: 45rem;
  height: 4rem;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  width: 45rem;
  color: var(--white);
  line-height: 3rem;
  font-weight: 500;
  user-select: none;
`;

export const Row = styled.div`
  width: ${({ width }) => (width ? `${width}` : "fit-content")};
  height: 4.8rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: ${({ justify }) => (justify ? `${justify}` : "flex-start")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  gap: ${({ gap }) => (gap ? `${gap}` : "0")};
`;

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

export const SpanError = styled.span`
  color: red;
  font-size: 1.6rem;
  font-weight: 300;
  user-select: none;
`;

export const Check = styled.button`
  height: 1.8rem;
  width: 1.8rem;
  background-color: ${({ checked }) =>
    checked ? `var(--purple)` : "transparent"};
  border: 1px solid
    ${({ checked }) => (checked ? `var(--purple)` : "var(--b500)")};
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 300;
  transition: background 0.3s, border 0.3s, filter 0.3s;
  user-select: none;
  &:hover {
    ${({ checked }) => !checked && "background-color: var(--b300)"};
    filter: brightness(1.2);
  }
`;

export const Remind = styled.span`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 300;
  align-items: center;
  user-select: none;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const SignUp = styled(Link)`
  width: 45rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2.4rem;
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: 600;
  background-color: transparent;
  transition: filter 0.3s;
  border: 2px solid var(--b200);
  color: var(--white);
  transition: background-color 0.3s;
  user-select: none;

  &:hover {
    background-color: var(--b200);
  }
`;

export const SignUpSpan = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--w100);
  user-select: none;
`;

export const Eye = styled.button`
  width: 1.8rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1rem;
  font-size: 1.4rem;
  background-color: transparent;
  color: var(--b500);
  cursor: pointer;
  transition: color 0.3s;
  user-select: none;

  &:hover {
    color: var(--purple);
  }
`;

export const ServerToast = styled.div`
  width: 45rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: 600;
  color: var(--white);
  background-color: var(--red);
  text-align: center;
`;
