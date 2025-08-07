import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle\`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  a {
    text-decoration: none;
  }
\`;

export default GlobalStyle;
