import React from 'react';

import { Header } from '@components/header';

import { Theme } from '@styles/theme';

export const Markets = () => (
  <Theme.Screen>
    <Header title="Markets" />
    <Theme.Screen isCentered>
      <Theme.Text>Markets</Theme.Text>
    </Theme.Screen>
  </Theme.Screen>
);
