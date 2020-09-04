import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Loader } from '@components/loader';
import { ModalContextProvider } from '@components/modal/modal-context';
import { AppNavigator } from './app.navigator';
import { AppRouter } from './app.router';

import { Theme } from '@styles/theme';

export const App: FC = () => (
  <Theme.Screen>
    <AppNavigator>
      <SafeAreaProvider>
        <ModalContextProvider>
          <Loader />
          <AppRouter />
        </ModalContextProvider>
      </SafeAreaProvider>
    </AppNavigator>
  </Theme.Screen>
);
