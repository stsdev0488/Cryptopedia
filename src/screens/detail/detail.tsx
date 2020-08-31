import React from 'react';

import { Header } from '@components/header';

import { Theme } from '@styles/theme';

export const Detail = () => (
  <Theme.Screen>
    <Header title="Detail" />
    <Theme.Screen isCentered>
      <Theme.Text>Detail</Theme.Text>
    </Theme.Screen>
  </Theme.Screen>
);
