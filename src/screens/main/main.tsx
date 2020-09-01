import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Loader } from '@components/loader';
import { MainRouter } from './main.router';

import { Theme } from '@styles/theme';

export const Main: FC = () => (
  <Theme.Screen>
    <NavigationContainer>
      <SafeAreaProvider>
        <Loader />
        <MainRouter />
      </SafeAreaProvider>
    </NavigationContainer>
  </Theme.Screen>
);
