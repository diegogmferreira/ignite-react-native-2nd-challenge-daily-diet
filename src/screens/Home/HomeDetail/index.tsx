
import { useTheme } from 'styled-components';
import { AnimatedPercentage, Container, LeftIconButton, Main } from './styles';

import { TextHighlight } from '@components/TextHighlight';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';


export function HomeDetail() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  return (
    <Container >
      <AnimatedPercentage
        sharedTransitionTag='percentage'
      >
        <LeftIconButton onPress={() => navigation.navigate('home')}>
          <ArrowLeft size={24} color={COLORS.GREEN_DARK} />
        </LeftIconButton>

        <TextHighlight
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          type="title"
        />
      </AnimatedPercentage>

      <Main />
    </Container>
  );
}