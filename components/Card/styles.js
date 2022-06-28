import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  padding: 0 0 20px 20px;
`;

export const MoreButton = styled.button`
  border: 0;
  background: ${({ theme }) => theme.colors.secondary_05};
  width: 100px;
  height: 45px;
  border-radius: 3px;
  cursor: pointer;
  margin: 5px 0;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

export const CharacterInformation = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 4px;
  }
`;
