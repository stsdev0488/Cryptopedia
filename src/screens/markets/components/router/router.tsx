import React from 'react';
import { TabView } from 'react-native-tab-view';

import { SubHeader } from '../sub-header';

import { useMarketsRouterState } from './router.state';

import { ITabBarProps } from './router.typings';

export const MarketsRouter = () => {
  const { index, routes, renderScene, setIndex } = useMarketsRouterState();

  const renderTabBar = (props: ITabBarProps) => <SubHeader {...props} />;

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};
