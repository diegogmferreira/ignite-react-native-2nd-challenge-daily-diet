import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const AnimatedPercentage = styled(Animated.View)`
  /* margin-top: 44px; */
  align-items: center;
  justify-content: center;
  width: '100%';
  height: 168px;

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
  border-radius: 20px 0 ;

  background-color: ${({ theme }) => theme.COLORS.WHITE}
`;