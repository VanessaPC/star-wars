import { createGlobalStyle } from "styled-components";
import { typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
${typography};

@font-face {
    font-family: 'Value Serif';
    src: url('https://static.xapo.com/frontend-assets/fonts/value-serif.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fabriga Regular';
    src: url('https://static.xapo.com/frontend-assets/fonts/Fabriga-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fabriga Medium';
    src: url('https://static.xapo.com/frontend-assets/fonts/FabrigaMedium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
    font-family: 'Fabriga Light';
    src: url('https://static.xapo.com/frontend-assets/fonts/FabrigaLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    body{ 
      background: ${({ theme }) => theme.colors.bgColor};
      color: ${({ theme }) => theme.colors.text};
      transition: all 0.40s linear;
    }

    a {
      color: ${({ theme }) => theme.colors.linkcColor};
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

`;
