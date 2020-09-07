import React from 'react';

import { Header } from '@components/header';
import { MarketsRouter } from './components';

import { STRINGS } from '@constants/strings';

import { Theme } from '@styles/theme';

export const Markets = () => (
  <Theme.Screen>
    <Header title={STRINGS.MARKETS.title} background="white" color="black" />
    <Theme.Screen>
      <MarketsRouter />
    </Theme.Screen>
  </Theme.Screen>
);
