import React, { FC } from 'react';

import { COLORS, FONT_SIZES } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ButtonStyles } from './button.styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
  color?: keyof typeof COLORS;
  isRounded?: boolean;
  fontSize?: keyof typeof FONT_SIZES;
}

export const Button: FC<IButtonProps> = ({
  title,
  onPress,
  color,
  isRounded,
  fontSize,
}) => (
  <ButtonStyles.Wrapper
    isRounded={isRounded}
    style={{ backgroundColor: COLORS[color || 'transparent'] }}
  >
    <ButtonStyles.Touchable
      onPress={onPress}
      activeOpacity={0.4}
      underlayColor={COLORS.transparent}
    >
      <Theme.Text fontWeight="medium" fontSize={fontSize} color={COLORS.white}>
        {title}
      </Theme.Text>
    </ButtonStyles.Touchable>
  </ButtonStyles.Wrapper>
);
