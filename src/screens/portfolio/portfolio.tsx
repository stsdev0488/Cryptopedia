import React from 'react';

import { Header } from '@components/header';

import { Theme } from '@styles/theme';

export const Portfolio = () => (
  <Theme.Screen>
    <Header title="Portfolio" />
    <Theme.Screen isCentered>
      <Theme.Text>Portfolio</Theme.Text>
    </Theme.Screen>
  </Theme.Screen>
);
