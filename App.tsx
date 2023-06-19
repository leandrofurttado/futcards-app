import { Heading, NativeBaseProvider, StatusBar } from 'native-base';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/loading';
import { Routes } from './src/routes';
import AuthProviderLogin from './src/contexts/authLogin';
import AuthProviderCadastro from './src/contexts/authCadastro';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthProviderLogin>
          <AuthProviderCadastro>
            <Routes />
          </AuthProviderCadastro>
        </AuthProviderLogin>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
