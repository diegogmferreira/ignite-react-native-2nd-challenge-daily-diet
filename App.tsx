import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";



export default function App() {
  const [fontsLoaded, fontError] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"default"} />

      {
        fontsLoaded 
        ? <Home />
        : <Loading />
      }
    </ThemeProvider >
  );
}
