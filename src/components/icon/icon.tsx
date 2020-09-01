import React, { FC } from 'react';

import { COLORS } from '@styles/colors';
import { IconStyles } from './icon.styles';

import home from '@assets/menu/home.svg';
import learn from '@assets/menu/learn.svg';
import markets from '@assets/menu/markets.svg';
import portfolio from '@assets/menu/portfolio.svg';

const ICONS = {
  home,
  markets,
  portfolio,
  learn,
};

export type TIconTypes = keyof typeof ICONS;

interface IIconProps {
  type: TIconTypes;
  size: number;
  color?: keyof typeof COLORS;
}

export const Icon: FC<IIconProps> = ({ type, size, color }) => {
  const Svg = ICONS[type];

  return (
    <IconStyles.Wrapper>
      <Svg
        height={size}
        width={size}
        style={{ color: color ? COLORS[color] : COLORS.primaryGray }}
      />
    </IconStyles.Wrapper>
  );
};
