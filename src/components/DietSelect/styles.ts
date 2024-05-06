import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type SelectProps = {
  isSelected: boolean;
  isDiet?: boolean;
}

export const Container = styled.View`
  width: 100%;
  gap: 8px;
`;

export const SelectOptions = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 8px;
`;

export const SelectBtn = styled(TouchableOpacity) <SelectProps>`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 49%;

  ${({ theme, isSelected, isDiet = false }) => css`
    background-color: ${isSelected
      ? isDiet
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6
    };
    border: ${isSelected
      ? isDiet
        ? `1px solid ${theme.COLORS.GREEN_DARK}`
        : `1px solid ${theme.COLORS.RED_DARK}`
      : 'none'
    };
    border-radius: 6px;
  `}
`;

export const IconStatus = styled.View<{ isDiet: boolean }>`
  width: 8px;
  height: 8px;

  border-radius: 100px;
  background-color: ${({ theme, isDiet }) => isDiet
    ? theme.COLORS.GREEN_DARK
    : theme.COLORS.RED_DARK
  };
`;

export const BtnText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    fontSize: ${theme.FONT_SIZE.SM}px;
    fontFamily: ${theme.FONT_FAMILY.BOLD};
  `}
`;