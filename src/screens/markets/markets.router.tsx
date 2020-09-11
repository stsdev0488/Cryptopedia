import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Detail } from '@screens/detail';
import { DetailNews } from '@screens/detail-news';
import { Markets } from './markets';

import { ROUTES } from '@constants/routes';

const Stack = createStackNavigator();

export const MarketsScreenRouter = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.markets} component={Markets}/>
    <Stack.Screen name={ROUTES.detail} component={Detail}/>
    <Stack.Screen name={ROUTES.detailNews} component={DetailNews}/>
  </Stack.Navigator>
);