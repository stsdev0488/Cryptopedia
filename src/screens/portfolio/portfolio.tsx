import React from 'react';

import { Header } from '@components/header';

import { STRINGS } from '@constants/strings';

import { Theme } from '@styles/theme';

export const Portfolio = () => (
  <Theme.Screen>
    <Header title={STRINGS.PORTFOLIO.title} />
    <Theme.Screen isCentered>
      <Theme.Text>{STRINGS.PORTFOLIO.title}</Theme.Text>
    </Theme.Screen>
  </Theme.Screen>
);
