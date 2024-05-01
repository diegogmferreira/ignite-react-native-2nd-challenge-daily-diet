import styled, { css } from "styled-components/native";

export const Title = styled.Text<{type: 'title' | 'body'}>`
  ${({theme, type}) => css`
    font-size: ${type === 'body' ? `${theme.FONT_SIZE.XL}px` : `${theme.FONT_SIZE['2XL']}px`};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Subtitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;