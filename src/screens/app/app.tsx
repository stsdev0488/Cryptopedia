import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { Text, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Loader } from '@components/loader';
import { ModalContextProvider } from '@components/modal/modal-context';
import { AppNavigator } from './app.navigator';
import { AppRouter } from './app.router';

import { ReduxProvider } from '@services/redux';

import { Theme } from '@styles/theme';

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

export const App: FC = () => (
  <ReduxProvider>
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
  </ReduxProvider>
);
