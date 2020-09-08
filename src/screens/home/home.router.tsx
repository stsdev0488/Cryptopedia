import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Detail } from '@screens/detail';
import { DetailNews } from '@screens/detail-news';
import { Settings } from '@screens/settings';
import { Home } from './home';

import { ROUTES } from '@constants/routes';

const Stack = createStackNavigator();

export const HomeRouter = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.home} component={Home} />
    <Stack.Screen name={ROUTES.settings} component={Settings} />
    <Stack.Screen name={ROUTES.detailHome} component={Detail} />
    <Stack.Screen name={ROUTES.detailNewsHome} component={DetailNews} />
  </Stack.Navigator>
);
