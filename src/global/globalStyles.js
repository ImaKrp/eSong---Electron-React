import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  box-sizing: border-box;
}

*:focus {
  outline-style: none;
}

html {
  /* White */
  --white: #fafafa;
  --w100: #f6f6f6;
  --w200: #ececec;
  --w300: #e1e1e1;
  --w400: #d0d0d0;

  /* Dark */
  --black: #111111;
  --b100: #1e1e1e;
  --b200: #3c3c3c;
  --b300: #262227;
  --b400: #2e2b33;
  --b500: #5d5d5d;

  /* Color */
  --blue: #a4add3;
  --purple: #705d97;
  --p100: #472360;
  --p200: #32243d;
  --p300: #2b2031;

  --red: #630A10;

  font-size: 62.5%;

  scroll-behavior: smooth;
}

body {
  height: 100vh;
  width: 100vw;
  background-color: var(--white);
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
}

.sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}


/* width */
::-webkit-scrollbar {
  width: 0;
}

h1, h2, h3, h4, h5, h6, span, p{
  cursor: default;
}
`;
