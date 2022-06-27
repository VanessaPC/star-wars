import React from "react";

import {
  SpinnerContainer,
  SpinnerCube1,
  SpinnerCube2,
  SpinnerCube3,
  SpinnerCube4,
} from "./styles";

export const Spinner = () => (
  <SpinnerContainer>
    <SpinnerCube1 />
    <SpinnerCube2 />
    <SpinnerCube4 />
    <SpinnerCube3 />
  </SpinnerContainer>
);
