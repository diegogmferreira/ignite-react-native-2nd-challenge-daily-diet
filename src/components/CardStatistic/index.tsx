import { useTheme } from 'styled-components/native';
import { Container } from './styles';

type Props = {
  color: 'GREEN' | 'RED' | 'GRAY';
  children: React.ReactNode;
}

export function CardStatistic({ color, children }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container
      style={{
        backgroundColor: color === 'GREEN'
          ? COLORS.GREEN_LIGHT
          : color === 'RED'
            ? COLORS.RED_LIGHT
            : COLORS.GRAY_6
      }}
    >
      {children}
    </Container>
  );
}