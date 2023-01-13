import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    background-color: hsl(0, 0%, 87%);
    word-break: break-word;
  }
  `;
