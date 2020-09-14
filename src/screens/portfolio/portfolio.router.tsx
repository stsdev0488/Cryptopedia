import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Detail } from '@screens/detail';
import { DetailNews } from '@screens/detail-news';
import { Transaction } from '@screens/transaction';
import { Portfolio } from './portfolio';

import { ROUTES } from '@constants/routes';

const Stack = createStackNavigator();

export const PortfolioRouter = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.portfolio} component={Portfolio} />
    <Stack.Screen name={ROUTES.detailPortfolio} component={Detail} />
    <Stack.Screen name={ROUTES.detailNewsPortfolio} component={DetailNews} />
    <Stack.Screen
      name={ROUTES.transactionPortfolio}
      component={Transaction}
    />
  </Stack.Navigator>
);
