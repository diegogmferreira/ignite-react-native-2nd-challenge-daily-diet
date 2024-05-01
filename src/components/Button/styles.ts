import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'primary' | 'secondary';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  ${({ theme, type }) => css`
    flex: 1;

    min-height: 50px;
    max-height: 50px;

    background-color: ${type === 'primary'
      ? theme.COLORS.GRAY_2
      : 'transparent'
    };
    border-radius: 6px;

    justify-content: center;
    align-items: center;
    gap: 12px;

    border: ${type === 'secondary' ? `1px solid ${theme.COLORS.GRAY_1}` : 'none'};
  `}
`;

export const ButtonText = styled.Text<Props>`
  ${({ theme, type }) => css`

    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'primary' ? `${theme.COLORS.WHITE}` : `${theme.COLORS.GRAY_1}`};
  `}	
`;
