import React from 'react';

import { Header } from '@components/header';

import { STRINGS } from '@constants/strings';

import { Theme } from '@styles/theme';

export const Detail = () => (
  <Theme.Screen>
    <Header title={STRINGS.DETAIL.title} />
    <Theme.Screen isCentered>
      <Theme.Text>{STRINGS.DETAIL.title}</Theme.Text>
    </Theme.Screen>
  </Theme.Screen>
);
