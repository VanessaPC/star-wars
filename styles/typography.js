import styled, { css } from "styled-components";
import { BLACK_75, BLACK_100, WHITE_SHELL, RED } from "./colors";

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
    line-height: 1.25rem;
    letter-spacing: 0;
    font-weight: normal;
    text-align: left;
    background-color: ${WHITE_SHELL};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${BLACK_100};
    @-moz-document url-prefix() {
      font-weight: lighter;
    }
  }
  /* h1 */
  h1 {
    font-family: "${VALUE_SERIF}";
    font-size: 1.75rem;
    line-height: 2.25rem;
  }

  /* h2 */
  h2 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: -0.01em;
  }

  /* h3 */
  h3 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: 0.01em;
  }
  /* body */
  p {
    letter-spacing: 0.02rem;
  }
  /* span = subtext  */
  h4,
  span,
  button {
    font-size: 0.8125rem;
    line-height: 1rem;
    letter-spacing: 0.02rem;
  }

  h4 {
    color: ${BLACK_75};
  }

  button {
    text-align: center;
    font-family: "${FABRIGA_REGULAR}";
  }

  /* Body BOLD - h5 / strong */
  h5,
  h6,
  strong {
    font-family: "${FABRIGA_MEDIUM}";
  }
  h5 {
    line-height: 1.25rem;
    letter-spacing: 0.01rem;
  }

  /* Subtext BOLD */
  h6 {
    line-height: 1rem;
    font-size: 0.8125rem;
    letter-spacing: 0.02rem;
  }
  /* annotations */
  caption {
    font-family: "${COURIER_NEW}";
    line-height: 0.75rem;
    font-size: 0.625rem;
    letter-spacing: 0.03rem;
  }
  /* underline */
  u {
    text-decoration-line: underline;
    line-height: 1.25rem;
  }

  input {
    font-size: 1rem;
    line-height: 1.25rem;
    background: inherit;
    border: 1px solid #333;
    &:focus {
      outline: none;
    }
  }

  textarea {
    font-size: 1rem;
  }
`;

export const overflowEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const P = styled.p`
  ${({ color }) => color && `color: ${color};`}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export const ErrorText = styled(P)`
  margin-top: 0.25rem;
  color: ${RED};
`;

export const Mini = styled(P)`
  font-size: 0.625rem;
  line-height: 0.75rem;
`;
