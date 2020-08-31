import React, { FC } from 'react';
import { NavigationState, SceneRendererProps } from 'react-native-tab-view';

import { TabBarItem } from './components';

import { TabBarStyles } from './tab-bar.styles';

interface ITabBarProps extends SceneRendererProps {
  navigationState: NavigationState<{
    icon: string;
    key: string;
  }>;
}

export const TabBar: FC<ITabBarProps> = ({ navigationState, jumpTo }) => {
  const { routes, index } = navigationState;

  const tabList = routes.map(({ key }, tabIndex) => {
    return (
      <TabBarItem
        key={key}
        title={key}
        isActive={index === tabIndex}
        onPress={() => jumpTo(key)}
      />
    );
  });

  return (
    <TabBarStyles.Wrapper>
      {tabList}
    </TabBarStyles.Wrapper>
  );
};
