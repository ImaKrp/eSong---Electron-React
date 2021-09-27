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
  --white: #fafafa;
  --color-text: #0e0e0f;
  --color-header: #262626;
  --color-card-border: #f1f1f1;

  --purple: #6f4bc3;
  
  --red: #e83f5b;
  --light-blue: #e0ecff;

  --input: #202024;
  --overlay: #040911;
  --grey-dark: #202024;

  font-size: 62.5%;

  scroll-behavior: smooth;
}

body {
  height: 100vh;
  width: 100vw;
  background-color: var(--white);
  font-family: "Poppins", sans-serif;
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
