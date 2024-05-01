import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native';

import { Image } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  margin-top: 38px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const AvatarImg = styled(Image).attrs({
  borderRadius: 100,
})`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Percentage = styled.View`
  width: 100%;
  margin-top: 32px;
  padding: 20px 16px;
  gap: 2px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT} ;
`;

export const ButtonWrapper = styled.View`
  margin-top: 40px;
  width: 100%;
  gap: 8px;
`;

export const ButtonLabel = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1}
  `}
`;