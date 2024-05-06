
import { useTheme } from 'styled-components/native';
import { AnimatedPercentage, CardContainer, Container, LeftIconButton, Main, Subtitle } from './styles';

import { TextHighlight } from '@components/TextHighlight';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { CardStatistic } from '@components/CardStatistic';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export function HomeDetail() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <AnimatedPercentage
        sharedTransitionTag='percentage'
      >
        <LeftIconButton onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color={COLORS.GREEN_DARK} />
        </LeftIconButton>

        <TextHighlight
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          type="title"
        />
      </AnimatedPercentage>

      <Main>
        <Subtitle>Estatísticas gerais</Subtitle>

        <CardContainer>
          <CardStatistic color='GRAY'>
            <TextHighlight
              title='22'
              subtitle='melhor sequência de pratos dentro da dieta'
              type='body'
            />
          </CardStatistic>

          <CardStatistic color='GRAY'>
            <TextHighlight
              title='109'
              subtitle='refeições registradas'
              type='body'
            />
          </CardStatistic>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 12,
              width: '100%',
              padding: 0,
            }}
          >
            <CardStatistic color='GREEN'>
              <TextHighlight
                title='99'
                subtitle={`refeições dentro da    \ndieta`}
                type='body'
              />
            </CardStatistic>

            <CardStatistic color='RED'>
              <TextHighlight
                title='10'
                subtitle={'refeições fora da        \ndieta'}
                type='body'
              />
            </CardStatistic>
          </View>
        </CardContainer>
      </Main>
    </Container>
  );
}