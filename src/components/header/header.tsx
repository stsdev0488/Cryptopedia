import React, { FC } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';

import { Theme } from '@styles/theme';
import { HeaderStyles } from './header.styles';

interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = ({ title }) => {
  const { top } = useSafeArea();

  return (
    <HeaderStyles.Wrapper style={{ paddingTop: top }}>
      <Theme.Text isCentered>{title}</Theme.Text>
    </HeaderStyles.Wrapper>
  );
};
