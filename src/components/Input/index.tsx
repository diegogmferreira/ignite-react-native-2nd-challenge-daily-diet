import { TextInput, TextInputProps } from 'react-native';
import { Container, Input, Label } from './styles';

type Props = {
  label?: string;
  inputRef?: React.RefObject<TextInput>
  inputProps?: TextInputProps;
}

export function InputWithLabel({ inputRef, label, inputProps, ...rest }: Props) {
  return (
    <Container>
      {label && <Label>{label}</Label>}

      <Input
        ref={inputRef}
        {...inputProps}
        {...rest}
      />
    </Container>
  )
}