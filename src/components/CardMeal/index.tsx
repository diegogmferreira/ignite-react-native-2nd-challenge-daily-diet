import { TouchableOpacityProps } from "react-native";
import { Container, HourText, Status, TitleText, VerticalDivider } from "./styles";


type Props = TouchableOpacityProps & {
  hourText: string;
  titleText: string;
  isDiet: boolean;
}

export function CardMeal({ hourText, titleText, isDiet, ...rest }: Props) {

  return (
    <Container
      {...rest}
    >
      <HourText>{hourText}</HourText>
      <VerticalDivider />
      <TitleText>{titleText}</TitleText>
      <Status 
        isDiet={isDiet}
      />

    </Container>
  )
}