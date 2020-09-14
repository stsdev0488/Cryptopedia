import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ModalWrapper } from '@components/modal';
import { TabBar } from '@components/tab-bar';
import { HomeRouter } from '@screens/home';
import { LearnScreenRouter } from '@screens/learn';
import { MarketsScreenRouter } from '@screens/markets';
import { PortfolioRouter } from '@screens/portfolio';

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
      <Stack.Screen name={ROUTES.home} component={HomeRouter} />
      <Stack.Screen name={ROUTES.markets} component={MarketsScreenRouter} />
      <Stack.Screen name={ROUTES.portfolio} component={PortfolioRouter} />
      <Stack.Screen name={ROUTES.learn} component={LearnScreenRouter} />
    </Stack.Navigator>
    <TabBar />
    <ModalWrapper />
  </Theme.Screen>
);
