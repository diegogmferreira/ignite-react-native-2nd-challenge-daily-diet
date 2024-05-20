import { Alert, Text, View } from "react-native";
import { Container, IsDietContainer, Main, TextContainer } from "./styles";
import { Header } from "@components/Header";
import { InputWithLabel } from "@components/Input";
import { useState } from "react";
import { DietSelect } from "@components/DietSelect";
import { Button } from "@components/Button";
import { Pencil, Plus, Trash } from "phosphor-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { IconStatus } from "@components/DietSelect/styles";

type RouteParams = {
  id: string;
}

export function ViewMeal() {
  const route = useRoute();
  const { id: mealId } = route.params as RouteParams;

  const navigation = useNavigation();
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

  const isDiet = false;

  function handleDeleteMeal() {
    Alert.alert(
      'Atenção',
      'Você realmente deseja excluir o registro da refeição?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim, excluir',
          style: 'default',
          onPress: async () => {
            onDelete()
          },
        },
      ],
    )
  }

  async function onDelete() {

  }

  return (
    <Container>
      <Header
        title="Refeição"
        color={isDiet ? "GREEN" : 'RED'}
      />
      <Main>
        <TextContainer>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT_FAMILY.BOLD,
              color: COLORS.GRAY_1,
            }}
          >
            Sanduíche
          </Text>
          <Text
            style={{
              fontSize: FONT_SIZE.MD,
              fontFamily: FONT_FAMILY.REGULAR,
              color: COLORS.GRAY_2,
            }}
          >
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>
        </TextContainer>

        <TextContainer>
          <Text
            style={{
              fontSize: FONT_SIZE.SM,
              fontFamily: FONT_FAMILY.BOLD,
              color: COLORS.GRAY_1,
            }}
          >
            Data e hora
          </Text>
          <Text
            style={{
              fontSize: FONT_SIZE.MD,
              fontFamily: FONT_FAMILY.REGULAR,
              color: COLORS.GRAY_2,
            }}
          >
            12/08/2022 às 16:00
          </Text>
        </TextContainer>

        <IsDietContainer>
          <IconStatus isDiet={isDiet} />
          <Text
            style={{
              fontSize: FONT_SIZE.SM,
              fontFamily: FONT_FAMILY.REGULAR,
              color: COLORS.GRAY_1,
            }}
          >
            {isDiet ? 'dentro da dieta' : 'fora da dieta'}
          </Text>
        </IsDietContainer>
      </Main>

      <View
        style={{
          position: 'absolute',
          bottom: 26,
          padding: 24,
          width: '100%',
          gap: 8
        }}
      >
        <Button
          text="Editar refeição"
          icon={<Pencil size={18} color={COLORS.WHITE} />}
          onPress={() => navigation.navigate('newMeal', { id: mealId })}
        />
        <Button
          text="Excluir refeição"
          type="secondary"
          icon={<Trash size={18} color={COLORS.GRAY_1} />}
          onPress={handleDeleteMeal}
        />
      </View>

    </Container>
  )
}