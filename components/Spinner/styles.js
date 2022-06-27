import styled from "styled-components";

export const SpinnerContainer = styled.div`
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  transform: rotateZ(45deg);
`;

const commonSpinnerStyles = `
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: yellow;
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }

  @keyframes sk-foldCubeAngle {
    0%, 10% {
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    } 25%, 75% {
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    } 90%, 100% {
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }
`;

export const SpinnerCube1 = styled.div`
  ${commonSpinnerStyles}
`;
export const SpinnerCube2 = styled.div`
  ${commonSpinnerStyles}
  transform: scale(1.1) rotateZ(90deg);

  &::before {
    animation-delay: 0.3s;
  }
`;
export const SpinnerCube3 = styled.div`
  ${commonSpinnerStyles}
  transform: scale(1.1) rotateZ(180deg);

  &::before {
    animation-delay: 0.6s;
  }
`;
export const SpinnerCube4 = styled.div`
  ${commonSpinnerStyles}
  transform: scale(1.1) rotateZ(270deg);

  &::before {
    animation-delay: 0.9s;
  }
`;
