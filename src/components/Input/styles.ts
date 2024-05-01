import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 4px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    width: 100%;
    max-height: 48px;
    min-height: 48px;
    
    border: 1px solid ${theme.COLORS.GRAY_5};
    border-radius: 6px;
    color: ${theme.COLORS.GRAY_1};


    :focus {
      border: 1px solid ${theme.COLORS.GRAY_3}
    }
  `}
` 