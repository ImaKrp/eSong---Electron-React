import React from "react";
import { SliderWrapper, SliderIn, Thumb, Range } from "./style";

export const Slider = (props) => {
  return (
    <>
      <SliderWrapper>
        <Thumb left={(props.percentage - 2).toString() ?? '0'} />
        <SliderIn width={props.percentage.toString() ?? '0'} />
        <Range
          type="range"
          step="0.01"
          value={props.percentage.toString() ?? '0'}
          onChange={props.onChange}
        />
      </SliderWrapper>
    </>
  );
};
