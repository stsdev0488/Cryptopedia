import React from 'react';
import { TabView } from 'react-native-tab-view';

import { SubHeader } from '@components/sub-header';

import { useMarketsRouterState } from './router.state';

import { MARKETS_ROUTES } from './router.constants';

import { ITabBarProps } from '@typings/router.d';

export const MarketsRouter = () => {
  const { index, routes, renderScene, setIndex } = useMarketsRouterState();

  const renderTabBar = (props: ITabBarProps) => <SubHeader {...props} routes={MARKETS_ROUTES} />;

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};