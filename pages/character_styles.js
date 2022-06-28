import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;

  background-color: ${({ theme }) => theme.colors.primary};
  margin: 20px;
  border-radius: 10px;

  h1 {
    text-align: center;
    padding: 20px 0;
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgColor};
    transition: background-color 0.3s ease-in-out;
  }
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;

  p {
    font-weight: 600;
  }
`;
