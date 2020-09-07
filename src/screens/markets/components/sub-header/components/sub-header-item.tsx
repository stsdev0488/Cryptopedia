import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

interface ISubHeaderItemProps {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
}

export const SubHeaderItem: FC<ISubHeaderItemProps> = ({
  title,
  isActive,
  onPress,
}) => (
  <TouchableHighlight underlayColor={COLORS.transparent} onPress={onPress}>
    <Theme.Text
      color={isActive ? COLORS.primaryBlue : COLORS.black}
      fontSize="big"
    >
      {title}
    </Theme.Text>
  </TouchableHighlight>
);
