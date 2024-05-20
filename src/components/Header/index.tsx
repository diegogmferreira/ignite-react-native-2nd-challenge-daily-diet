import { ArrowLeft } from 'phosphor-react-native';
import { Container } from './styles';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  color: 'GRAY' | 'GREEN' | 'RED';
}

export function Header({ title, color }: Props) {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();
  const navigation = useNavigation();

  return (
    <Container
      style={{
        backgroundColor: color === 'GRAY'
          ? COLORS.GRAY_6
          : color === 'GREEN' 
            ? COLORS.GREEN_LIGHT
            : color === 'RED' && COLORS.RED_LIGHT
      }}
    >
      <TouchableOpacity
        onPress={() => { navigation.goBack() }}
        style={{
          position: 'absolute',
          top: 66,
          left: 24
        }}
      >
        <ArrowLeft size={24} color={COLORS.GRAY_2} />
      </TouchableOpacity>

      <Text
        style={{
          color: COLORS.GRAY_1,
          fontSize: FONT_SIZE.LG,
          fontFamily: FONT_FAMILY.BOLD,
        }}
      >
        {title}
      </Text>
    </Container>
  )
}