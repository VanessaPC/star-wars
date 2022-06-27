import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled(Image)`
  object-fit: cover;
  border-radius: 0.3rem;
  max-height: 478px;
  width: 80vw;
  height: 80vh;
  margin: 2rem;
`;
