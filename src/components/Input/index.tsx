import { TextInput } from 'react-native';
import { Container, Input, Label } from './styles';

type Props = {
  label?: string;
  inputRef?: React.RefObject<TextInput>
}

export function Button({ inputRef, label, ...rest }: Props) {
  return (
    <Container>
      {label && <Label>{label}</Label>}

      <Input
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}