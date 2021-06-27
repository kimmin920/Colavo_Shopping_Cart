import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    height: 100vh;
    width: 100vw;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    box-sizing: border-box;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default GlobalStyle;
