import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Main = styled.View`
  /* flex: 1; */
  width: '100%';
  border-radius: 20px 20px ;

  padding-top: 32px;
  margin-top: -20px;

  padding: 24px;
  gap: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE}
`;


