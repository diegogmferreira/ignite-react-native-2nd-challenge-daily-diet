import React from 'react';
import { AvatarImg, ButtonLabel, ButtonWrapper, Container, Header, Logo, Percentage, SectionTitleText, UpRightIcon } from "./styles";

import logoImg from '@assets/Logo.png';
import avatarImg from '@assets/avatarImg.png'
import { Button } from "@components/Button";
import { TextHighlight } from "@components/TextHighlight";
import { Plus } from "phosphor-react-native";
import { useState } from "react";
import { useTheme } from "styled-components";

import { randomUUID } from 'expo-crypto';
import { CardMeal } from "@components/CardMeal";
import { ScrollView, SectionList, Text, View } from "react-native";
import { getDateMonthAndYer, getHourfromDate } from "@utils/dateUtils";
import { groupBy } from '@utils/arrayUtils';
import { EmptyList } from '@components/EmptyList';


// id: randomUUID()
type DietType = {
  id: string;
  name: string;
  description: string;
  date: Date;
  isDiet: boolean;
}

type FormattedDietType = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
}

export function Home() {
  const initialData: DietType[] = [
    { id: randomUUID(), name: 'X-tudo 1', description: 'Lanche gordo', date: new Date(2022, 7, 11, 9, 30), isDiet: true },
    { id: randomUUID(), name: 'X-tudo 2', description: 'Lanche gordo', date: new Date(2022, 7, 11, 11, 30), isDiet: true },
    { id: randomUUID(), name: 'Whey protein com leite', description: 'Wheiy', date: new Date(2022, 7, 11, 16), isDiet: true },
    { id: randomUUID(), name: 'X-tudo 3', description: 'Lanche gordo', date: new Date(2022, 7, 11, 20), isDiet: false },
    { id: randomUUID(), name: 'X-tudo 3', description: 'Lanche gordo', date: new Date(2022, 7, 11, 20), isDiet: false },
    { id: randomUUID(), name: 'X-tudo 3', description: 'Lanche gordo', date: new Date(2022, 7, 11, 20), isDiet: false },
    { id: randomUUID(), name: 'X-tudo 3', description: 'Lanche gordo', date: new Date(2022, 7, 11, 20), isDiet: false },

    { id: randomUUID(), name: 'X-tudo', description: 'Lanche gordo', date: new Date(2022, 7, 12, 9, 30), isDiet: true },
    { id: randomUUID(), name: 'X-tudo 2', description: 'Lanche gordo', date: new Date(2022, 7, 12, 12, 30), isDiet: true },
    { id: randomUUID(), name: 'Whey protein com leite', description: 'Wheiy', date: new Date(2022, 7, 12, 16), isDiet: true },
    { id: randomUUID(), name: 'X-tudo 3', description: 'Lanche gordo', date: new Date(2022, 7, 12, 20), isDiet: false },
    { id: randomUUID(), name: 'X-tudo 3', description: 'Lanche gordo', date: new Date(2022, 7, 12, 20), isDiet: false },
    { id: randomUUID(), name: 'X-tudo 3', description: 'Lanche gordo', date: new Date(2022, 7, 12, 20), isDiet: false },
  ]

  const { COLORS } = useTheme();
  const [dietList, setDietList] = useState<DietType[]>(initialData);

  const formattedData: FormattedDietType[] = dietList.sort((a, b) => {
    return b.date.getTime() - a.date.getTime()
  }).map((diet) => {
    return {
      id: diet.id,
      name: diet.name,
      description: diet.description,
      date: getDateMonthAndYer(diet.date),
      hour: getHourfromDate(diet.date),
      isDiet: diet.isDiet
    }
  });

  const groupedDataByDate = groupBy(formattedData, ({ date }) => date);
  const sectionList = Object.keys(groupedDataByDate).map(key => {
    return {
      title: key,
      data: groupedDataByDate[key]
    }
  });

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <AvatarImg source={avatarImg} style={{
          borderWidth: 2,
          borderColor: '#333638',
          borderRadius: 100,
        }} />
      </Header>

      <Percentage>
        <UpRightIcon size={24} color={COLORS.GREEN_DARK} />
        <TextHighlight
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          type="title"
        />
      </Percentage>

      <ButtonWrapper>
        <ButtonLabel>Refeições</ButtonLabel>
        <Button
          text="Nova Refeição"
          icon={<Plus size={18} color={COLORS.WHITE} />}
          onPress={() => { }}
        />
      </ButtonWrapper>

      <SectionList
        style={{
          marginBottom: 32
        }}
        sections={sectionList}
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        keyExtractor={({ id }, index) => id}
        contentContainerStyle={
          sectionList.length === 0 && {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
        renderItem={({ item }) => {
          return (
            // <View style={{ gap: 8 }}>
            <CardMeal
              hourText="20:00"
              titleText={item.name}
              isDiet={item.isDiet}
            />
            // </View>
          )
        }}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitleText>{title}</SectionTitleText>
        )}
        ListEmptyComponent={() => (
          <EmptyList
            message='Não há refeições registrada.'
          />
        )}
      />

    </Container>
  )
}