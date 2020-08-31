import { TouchableHighlight } from 'react-native-gesture-handler';

import React, { FC } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';

import { TabBarItemStyles } from './tab-bar-item.styles';

interface ITabBarItemProps {
  title: string;
  isActive?: boolean;
  onPress: () => void;
}

export const TabBarItem: FC<ITabBarItemProps> = ({
  title,
  isActive,
  onPress,
}) => {
  const { bottom } = useSafeArea();

  return (
    <TabBarItemStyles.Wrapper style={{ paddingBottom: bottom }}>
      <TouchableHighlight underlayColor="#fff" onPress={onPress}>
        <TabBarItemStyles.Text isCentered isActive={isActive}>
          {title}
        </TabBarItemStyles.Text>
      </TouchableHighlight>
    </TabBarItemStyles.Wrapper>
  );
};
