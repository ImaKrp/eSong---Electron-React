import React from "react";

export const LoopSVG = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.level === 0 && (
        <path
          d="M5.5 5H10V6.5L13.5 4.5L10 2.5V4H5.5C3 4 1 6 1 8.5C1 9.1 1.1 9.7 1.4 10.3L2.3 9.8C2.1 9.4 2 9 2 8.5C2 6.6
           3.6 5 5.5 5ZM14.6 6.7L13.7 7.2C13.9 7.6 14 8 14 8.5C14 10.4 12.4 12 10.5 12H6V10.5L2.5 12.5L6 14.5V13H10.5C13 13 15 11 15 8.5C15 7.9 14.9 7.3 14.6 6.7Z"
          fill="white"
        />
      )}
      {props.level === 1 && (
        <path
          d="M5.5 5H10V6.5L13.5 4.5L10 2.5V4H5.5C3 4 1 6 1 8.5C1 9.1 1.1 9.7 1.4 10.3L2.3 9.8C2.1 9.4 2 9 2 8.5C2 6.6 
          3.6 5 5.5 5ZM14.6 6.7L13.7 7.2C13.9 7.6 14 8 14 8.5C14 10.4 12.4 12 10.5 12H6V10.5L2.5 12.5L6 14.5V13H10.5C13 13 15 11 15 8.5C15 7.9 14.9 7.3 14.6 6.7Z"
          fill="#A4ADD3"
        />
      )}
      {props.level === 2 && (
        <path
          d="M5 5V4C2.8 4.3 1 6.2 1 8.5C1 9.1 1.1 9.7 1.4 10.3L2.3 9.8C2.1 9.4 2 9 2 8.5C2 6.7 3.3 5.3 5 5ZM10.5 
          12H6V10.5L2.5 12.5L6 14.5V13H10.5C12.4 13 14 11.8 14.7 10.2C14.2 10.5 13.7 10.7 13.2 10.8C12.5 11.5 11.6 12 10.5 12V12ZM11.5 0C9 0 7 2 7 4.5C7 7 9 
          9 11.5 9C14 9 16 7 16 4.5C16 2 14 0 11.5 0ZM12.4 7H11.1V3.6H10V2.6H10.1C10.3 2.6 10.4 2.6 10.5 2.5C10.6 2.5 10.8 2.4 10.9 2.3C11 2.2 11.1 2.1 11.1 
          2C11.2 1.9 11.2 1.8 11.2 1.7V1.6H12.3V7H12.4Z"
          fill="#A4ADD3"
        />
      )}
    </svg>
  );
};