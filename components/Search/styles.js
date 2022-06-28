import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  height: 450px;
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

export const SearchInput = styled(DebounceInput)`
  font-size: 2rem;
  padding: 0.8rem 1rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textColor};
`;
