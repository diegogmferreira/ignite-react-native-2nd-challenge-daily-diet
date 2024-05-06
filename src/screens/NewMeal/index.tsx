import { View } from "react-native";
import { Container, Main } from "./styles";
import { Header } from "@components/Header";
import { InputWithLabel } from "@components/Input";
import { useState } from "react";
import { DietSelect } from "@components/DietSelect";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";

export function NewMeal() {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [option, setOption] = useState<'YES' | 'NO' | ''>('');

  return (
    <Container>
      <Header
        title="Nova refeição"
        color="GRAY"
      />

      <Main>
        <InputWithLabel
          label="Nome"
        />

        <InputWithLabel
          label="Descrição"
          inputProps={{
            multiline: true,
            numberOfLines: 10,
            style: {
              height: 142,
              textAlignVertical: 'top'
            }
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            gap: 24,
            width: '100%',
          }}
        >
          <InputWithLabel
            label="Data"
            inputProps={{
              keyboardType: 'numeric',
              maxLength: 8,
              onChangeText: (e) => setDate(e.replace(/(\d{2})(\d{2})(\d{4})/, '$1-$2-$3')),
              value: date,
              placeholder: 'dd/MM/yyyy'
            }}
          />
          <InputWithLabel
            label="Hora"
            inputProps={{
              keyboardType: 'numeric',
              maxLength: 4,
              onChangeText: (e) => setHour(e.replace(/(\d{2})(\d{2})/, '$1:$2')),
              value: hour,
              placeholder: 'HH:mm'
            }}
          />
        </View>

        <DietSelect
          option={option}
          setOption={setOption}
        />



      </Main>

      <View
        style={{
          position: 'absolute',
          bottom: 26,
          padding: 24,
          width: '100%',
        }}
      >
        <Button
          text="Cadastrar refeição"
        />

      </View>

    </Container>
  )
}