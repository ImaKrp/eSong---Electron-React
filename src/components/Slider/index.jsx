import React from "react";
import { SliderWrapper, SliderIn, Thumb, Range } from "./style";

export const Slider = (props) => {
  console.log(props.percentage)
  return (
    <>
      <SliderWrapper>
        <Thumb left={props.percentage-2}/>
        <SliderIn width={props.percentage}/>
        <Range type="range" step="0.01" value={props.percentage} onChange={props.onChange} />
      </SliderWrapper>
    </>
  );
};
