import React, { FC } from 'react';
import { NavigationState, SceneRendererProps } from 'react-native-tab-view';

import { TabBarItem } from './components';

import { TNavigationState } from '@typings/routes';

import { TabBarStyles } from './tab-bar.styles';

interface ITabBarProps extends SceneRendererProps {
  navigationState: NavigationState<TNavigationState>;
}

export const TabBar: FC<ITabBarProps> = ({ navigationState, jumpTo }) => {
  const { routes, index } = navigationState;

  const tabList = routes.map(({ key, icon }, tabIndex) => {
    return (
      <TabBarItem
        key={key}
        title={key}
        icon={icon}
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
