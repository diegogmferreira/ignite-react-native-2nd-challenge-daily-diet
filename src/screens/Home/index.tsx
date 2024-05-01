import { AvatarImg, ButtonLabel, ButtonWrapper, Container, Header, Logo, Percentage } from "./styles";

import logoImg from '@assets/Logo.png';
import avatarImg from '@assets/avatarImg.png'
import { Button } from "@components/Button";
import { TextHighlight } from "@components/TextHighlight";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components";

export function Home() {
  const { COLORS } = useTheme();
  
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <AvatarImg source={avatarImg} />
      </Header>

      <Percentage>
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
          onPress={() => {}}
        />
      </ButtonWrapper>

    </Container>
  )
}