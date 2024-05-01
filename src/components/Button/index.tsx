import { TouchableOpacityProps } from "react-native";
import { ButtonText, ButtonTypeStyleProps, Container } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
  icon?: JSX.Element;
}

export function Button({ text, type = 'primary', icon, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {!!icon && icon}
      <ButtonText type={type}>
        {text}
      </ButtonText>
    </Container>
  )
}