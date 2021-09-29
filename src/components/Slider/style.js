import styled from "styled-components";

export const Thumb = styled.div`
  width: 10px;
  height: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.33);
  z-index: 3;
  background-color: var(--w400);
  position: absolute;
  border-radius: 50%;
  top: 50%;
  cursor: default;
  transform: translate(0%, -50%);
  display: none;
  pointer-events: none;
  user-select: none;
  margin-left: ${({ left }) => (left ? `${left}%` : "0")};
`;

export const SliderWrapper = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  box-shadow: 0px 2px 15px -3px #000000bf;
  height: 0.4rem;
  width: 100%;
  background-color: var(--b700);
  position: relative;

  &:hover ${Thumb} {
    display: flex;
  }
`;

export const SliderIn = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "0")};
  height: 100%;
  border-radius: 0.4rem;
  background-color: var(--blue);
  position: absolute;
`;

export const Range = styled.input`
  -webkit-appearance: none;
  opacity: 0;
  background-color: var(--blue);
  height: 0.4rem;
  width: 100%;
  margin: 0 auto;
  position: absolute;

  &::-webkit-slider-thumb {
    width: 10px;
    height: 10px;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;
