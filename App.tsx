import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Loading } from "./src/components/Loading";
import { Routes } from "src/routes";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"default"}
        backgroundColor={"transparent"}
        translucent
      />

      {
        fontsLoaded
          ? <Routes />
          : <Loading />
      }
    </ThemeProvider >
  );
}
