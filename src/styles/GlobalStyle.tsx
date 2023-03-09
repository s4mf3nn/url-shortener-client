import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ bgColor: string; }>`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${p => p.bgColor ? p.bgColor : "#fff"};
  }
`;