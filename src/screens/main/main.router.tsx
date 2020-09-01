import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabBar } from '@components/tab-bar';
import { Detail } from '@screens/detail';
import { Home } from '@screens/home';
import { Learn } from '@screens/learn';
import { Markets } from '@screens/markets';
import { Portfolio } from '@screens/portfolio';

import { ROUTES } from '@constants/routes';

import { TNavigationState } from '@typings/routes';

const TabNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState<TNavigationState[]>([
    { key: ROUTES.home, icon: 'home' },
    { key: ROUTES.markets, icon: 'markets' },
    { key: ROUTES.portfolio, icon: 'portfolio' },
    { key: ROUTES.learn, icon: 'learn' },
  ]);

  const renderScene = SceneMap({
    [ROUTES.home]: Home,
    [ROUTES.markets]: Markets,
    [ROUTES.portfolio]: Portfolio,
    [ROUTES.learn]: Learn,
  });

  return (
    <TabView
      timingConfig={{ duration: 0 }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={TabBar}
      onIndexChange={setIndex}
      swipeEnabled={false}
      tabBarPosition="bottom"
    />
  );
};

const Stack = createStackNavigator();

export const MainRouter = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.main} component={TabNavigation} />
    <Stack.Screen name={ROUTES.detail} component={Detail} />
  </Stack.Navigator>
);
