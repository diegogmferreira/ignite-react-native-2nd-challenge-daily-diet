import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native';

import { Image } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;

  background-color: ${({theme}) => theme.COLORS.WHITE};
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
  border: 2px solid ${({theme}) => theme.COLORS.GRAY_2};
`;