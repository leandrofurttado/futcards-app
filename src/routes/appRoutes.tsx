import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Heading, VStack } from "native-base";
import { Home } from '../screens/Home';
import React from 'react';
import SignIn from '../screens/SignIn';
import Register from '../screens/Register';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRotas() {
  return (
    <Navigator>
      <Screen
        name="signin"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
