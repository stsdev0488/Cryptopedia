import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ModalWrapper } from '@components/modal';
import { TabBar } from '@components/tab-bar';
import { Home } from '@screens/home';
import { Learn } from '@screens/learn';
import { Markets } from '@screens/markets';
import { Portfolio } from '@screens/portfolio';

import { ROUTES } from '@constants/routes';

import { Theme } from '@styles/theme';

const Stack = createStackNavigator();

export const TabNavigator = () => (
  <Theme.Screen>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name={ROUTES.home} component={Home} />
      <Stack.Screen name={ROUTES.markets} component={Markets} />
      <Stack.Screen name={ROUTES.portfolio} component={Portfolio} />
      <Stack.Screen name={ROUTES.learn} component={Learn} />
    </Stack.Navigator>
    <TabBar />
    <ModalWrapper />
  </Theme.Screen>
);
