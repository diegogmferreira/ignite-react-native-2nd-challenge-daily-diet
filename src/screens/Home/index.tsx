import { AvatarImg, Container, Header, Logo } from "./styles";

import logoImg from '@assets/Logo.png';
import avatarImg from '@assets/avatarImg.png'

export function Home() {

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <AvatarImg source={avatarImg} />
      </Header>

    </Container>
  )
}