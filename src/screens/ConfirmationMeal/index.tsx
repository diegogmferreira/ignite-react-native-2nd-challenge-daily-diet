import { Text, View } from "react-native";
import { Container, BackImage, TitleContainer } from "./styles";
import { useTheme } from "styled-components/native";

import DietImage from '@assets/newMealOk.png';
import NotDietImage from '@assets/newMeal.png';
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  isDiet: boolean;
}

export function ConfirmationMeal() {
  const route = useRoute();
  const { isDiet } = route.params as RouteParams;
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        <Text
          style={{
            fontSize: FONT_SIZE.XL,
            fontFamily: FONT_FAMILY.BOLD,
            color: isDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK,
            textAlign: 'center',
            marginBottom: 8
          }}
        >
          {isDiet ? 'Continue assim!' : 'Que pena!'}
        </Text>

        <Text
          style={{
            fontSize: FONT_SIZE.MD,
            fontFamily: FONT_FAMILY.REGULAR,
            color: COLORS.GRAY_1,
            textAlign: 'center',
          }}
        >
          {isDiet
            ? 'Você continua dentro da dieta. Muito bem!'
            : `Você saiu da dieta dessa vez, mas continue \nse esforçando e não desista!`
          }
        </Text>

      </TitleContainer>

      <BackImage
        source={
          isDiet
            ? DietImage
            : NotDietImage
        }
      />
      <Button
        text="Ir para a página inicial"
        onPress={() => { navigation.navigate("home") }}
      />
    </Container>
  )
}