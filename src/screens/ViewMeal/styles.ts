import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Main = styled.View`
  /* flex: 1; */
  /* width: '100%'; */
  border-radius: 20px 20px ;

  padding-top: 32px;
  margin-top: -20px;

  padding: 24px;
  gap: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const TextContainer = styled.View`
  gap: 8px;
`;

export const IsDietContainer = styled.View`
  flex-direction: row;
  margin: 0 auto;
  margin-left: 0;
  padding: 8px 16px;
  gap: 8px;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 100px;
`;
