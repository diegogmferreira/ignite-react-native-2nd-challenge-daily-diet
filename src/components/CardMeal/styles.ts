import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 49px;
    max-height: 49px;

    padding: 14px 16px 14px 12px;

    flex-direction: row;
    align-items: center;

    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_5};
    border-radius: 6px;

    gap: 12px;

    margin-bottom: 8px;
  `}
`;

export const HourText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const VerticalDivider = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const TitleText = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Status = styled.View<{ isDiet: boolean }>`
  width: 14px;
  height: 14px;

  border-radius: 100px;
  background-color: ${({ theme, isDiet }) => isDiet
    ? theme.COLORS.GREEN_MID
    : theme.COLORS.RED_MID
  };
`