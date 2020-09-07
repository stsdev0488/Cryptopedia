import React, { FC } from 'react';

import { SubHeaderItem } from './components/sub-header-item';

import { ROUTES } from '@constants/routes';
import { MARKETS_ROUTES } from '../router/router.constants';

import { ITabBarProps } from '../router/router.typings';

import { SubHeaderStyles } from './sub-header.styles';

export const SubHeader: FC<ITabBarProps> = ({ navigationState, jumpTo }) => {
  const { index: activeRouteIndex } = navigationState;

  const tabList = navigationState.routes.map(({ key }, index) => {
    const handlePress = () => jumpTo(MARKETS_ROUTES[index].key);
    return (
      <SubHeaderItem
        key={key}
        title={ROUTES[key]}
        isActive={index === activeRouteIndex}
        onPress={handlePress}
      />
    );
  });

  return <SubHeaderStyles.Wrapper>{tabList}</SubHeaderStyles.Wrapper>;
};
