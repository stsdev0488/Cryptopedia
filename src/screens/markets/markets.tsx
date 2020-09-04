import React from 'react';

import { Header } from '@components/header';

import { STRINGS } from '@constants/strings';

import { Theme } from '@styles/theme';

export const Markets = () => (
  <Theme.Screen>
    <Header title={STRINGS.MARKETS.title} />
    <Theme.Screen isCentered>
      <Theme.Text>{STRINGS.MARKETS.title}</Theme.Text>
    </Theme.Screen>
  </Theme.Screen>
);
