import styled from "styled-components";
import { TABLET, PHONE } from "../styles/queries";

export const Container = styled.div`
  margin: 0;
  padding: 20px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  height: 450px;
`;

export const SearchInput = styled.input`
  font-size: 2rem;
  padding: 0.8rem 1rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 63%;
  position: absolute;
  top: 180px;
  margin-left: auto;
  margin-right: auto;
  left: 0px;
  right: 0px;
`;

export const ToggleContainer = styled.div`
  margin: 0;
  padding: 10px;

  position: absolute;
  top: 20px;
`;
export const ToggleButton = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.secondary_05};
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

export const ResultContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: max-content;
  gap: 40px;

  margin: 0 auto;
  padding: 10px 0;

  ${TABLET} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  ${PHONE} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
