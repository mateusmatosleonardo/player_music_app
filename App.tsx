import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home/Home';
import { theme } from './src/theme/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return null
    // return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

