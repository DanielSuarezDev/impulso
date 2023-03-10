import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle<any>`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({theme}) => theme.background};
    overflow-x: hidden
  }
  html {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;

  }
`;
