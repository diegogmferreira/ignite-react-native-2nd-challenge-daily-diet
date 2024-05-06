import { View } from "react-native";
import { Subtitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  type?: 'title' | 'body'
}

export function TextHighlight({ title, subtitle, type = 'body' }: Props) {
  return (
    <>
      <Title type={type}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  )
}