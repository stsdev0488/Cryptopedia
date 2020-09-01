import React, { FC } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';

import { COLORS } from '@styles/colors';
import { Theme } from '@styles/theme';
import { HeaderStyles } from './header.styles';

interface IHeaderProps {
  title: string;
  background?: keyof typeof COLORS;
  color?: keyof typeof COLORS;
}

export const Header: FC<IHeaderProps> = ({ title, background, color }) => {
  const { top } = useSafeArea();

  return (
    <HeaderStyles.Wrapper
      style={{
        paddingTop: top,
        backgroundColor:
          (background && COLORS[background]) || COLORS.primaryBlue,
      }}
    >
      <Theme.Text isCentered color={COLORS[color || 'white']} fontSize="title">
        {title}
      </Theme.Text>
    </HeaderStyles.Wrapper>
  );
};
