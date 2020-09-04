import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { getCurrentRoute } from '@screens/app/app.navigator';
import { TabBarItem } from './components';

import { TABS } from './tab-bar.constants';

import { TabBarStyles } from './tab-bar.styles';

export const TabBar = () => {
  const { navigate } = useNavigation();
  const currentRoute = getCurrentRoute();

  const tabList = TABS.map(({ key, icon }) => {
    return (
      <TabBarItem
        key={key}
        title={key}
        icon={icon}
        isActive={key === currentRoute}
        onPress={() => navigate(key)}
      />
    );
  });

  return (
    <TabBarStyles.Wrapper>
      {tabList}
    </TabBarStyles.Wrapper>
  );
};
