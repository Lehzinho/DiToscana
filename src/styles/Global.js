import {
  createGlobalStyle
} from "styled-components";

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #757575;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    outline: none;

  }

  p {
    font-size: clamp(.75rem, 3vw, 1.125rem);
    line-height: 20px;
    letter-spacing: 0.005em;
  }

  a,
  a:visited {
    font-family: ${({theme}) => theme.FONTS[0]};
    color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
    text-decoration: none;
  }

  h2 {
    font-family: ${({theme}) => theme.FONTS[2]};
    font-size: clamp(1.125rem, 5vw, 3.75rem);
  }

  botton, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  li {
    list-style: none;
  }
`;