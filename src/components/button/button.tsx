import React, { FC } from 'react';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ButtonStyles } from './button.styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
  color?: keyof typeof COLORS;
}

export const Button: FC<IButtonProps> = ({ title, onPress, color }) => (
  <ButtonStyles.Wrapper
    style={{ backgroundColor: COLORS[color || 'transparent'] }}
  >
    <ButtonStyles.Touchable
      onPress={onPress}
      activeOpacity={0.4}
      underlayColor={COLORS.transparent}
    >
      <Theme.Text fontWeight="medium" color={COLORS.white}>
        {title}
      </Theme.Text>
    </ButtonStyles.Touchable>
  </ButtonStyles.Wrapper>
);
