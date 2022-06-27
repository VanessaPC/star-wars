import { css } from "styled-components";

export const VALUE_SERIF = "Value Serif";
export const FABRIGA_MEDIUM = "Fabriga Medium";
export const FABRIGA_REGULAR = "Fabriga Regular";
export const COURIER_NEW = "Courier New";

export const typography = css`
  * {
    text-align: left;
  }

  body {
    font-family: "${FABRIGA_REGULAR}";
    font-size: 1rem;
    line-height: 19px;
    letter-spacing: 0;
    font-weight: normal;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    color: ${({ theme }) => theme.colors.textColor};
    @-moz-document url-prefix() {
      font-weight: lighter;
    }
  }
  /* h1 */
  h1 {
    font-family: "${VALUE_SERIF}";
    font-size: 28px;
    line-height: 36px;
  }

  /* h2 */
  h2 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.16px;
  }

  /* h3 */
  h3 {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.2px;
  }
  /* body */
  p,
  span {
    letter-spacing: 0.2px;
  }

  span {
    line-height: 28px;
  }

  button {
    text-align: center;
    font-family: "${FABRIGA_REGULAR}";
  }

  input {
    font-size: 16px;
    line-height: 19px;
    background: inherit;
    border: 1px solid #333;
    &:focus {
      outline: none;
    }
  }
`;
