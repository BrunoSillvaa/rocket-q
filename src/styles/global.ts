import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5498FF;
    --black: #0D114F;
    --grey: #A1B2CD
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400
  }

  h1, h2, h3, h4 , h5, h6, strong {
    font-weight: 600
  }

  button {
    cursor: pointer
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed
  }
`