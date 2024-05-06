import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const AnimatedPercentage = styled(Animated.View)`
  padding-top: 44px;
  align-items: center;
  justify-content: center;
  width: '100%';
  height: 200px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const LeftIconButton = styled(TouchableOpacity)`
  position: absolute;
  top: 48px;
  left: 24px;
`;

export const Main = styled.View`
  flex: 1;
  width: '100%';
  border-radius: 20px 20px ;

  justify-content: center;
  padding-top: 32px;
  margin-top: -20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const CardContainer = styled.View`
  flex: 1;
  width: '100%';
  
  margin-top: 24px;
  padding: 24px;
  gap: 12px;
`;