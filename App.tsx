import { Heading, NativeBaseProvider, StatusBar, VStack } from 'native-base';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/loading';
import SignIn from './src/screens/SignIn';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <SignIn />
        
      ) : (<Loading/>)}
    </NativeBaseProvider>
  )
}