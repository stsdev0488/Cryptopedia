import React from 'react';

import { Header } from '@components/header';

import { Theme } from '@styles/theme';

export const Learn = () => (
  <Theme.Screen>
    <Header title="Learn" />
    <Theme.Screen isCentered>
      <Theme.Text>Learn</Theme.Text>
    </Theme.Screen>
  </Theme.Screen>
);
