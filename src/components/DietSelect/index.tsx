
import { Text } from 'react-native';
import { Container, SelectOptions, SelectBtn, IconStatus, BtnText } from './styles';
import { useTheme } from 'styled-components/native';
import { useState } from 'react';

type Props = {
  option: 'YES' | 'NO' | '';
  setOption: (text: 'YES' | 'NO') => void;
}

export function DietSelect({ option, setOption }: Props) {
  const { FONT_SIZE, FONT_FAMILY, COLORS } = useTheme();

  return (
    <Container>
      <Text
        style={{
          color: COLORS.GRAY_2,
          fontSize: FONT_SIZE.SM,
          fontFamily: FONT_FAMILY.BOLD
        }}
      >
        Está dentro da dieta?
      </Text>

      <SelectOptions>
        <SelectBtn
          isSelected={option === 'YES'}
          onPress={() => setOption('YES')}
          isDiet
        >
          <IconStatus isDiet />
          <BtnText>
            Sim
          </BtnText>
        </SelectBtn>

        <SelectBtn
          isSelected={option === 'NO'}
          onPress={() => setOption('NO')}
        >
          <IconStatus isDiet={false} />
          <BtnText>
            Não
          </BtnText>
        </SelectBtn>
      </SelectOptions>
    </Container>
  )
}