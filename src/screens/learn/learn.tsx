import React from 'react';

import { Header } from '@components/header';

import { STRINGS } from '@constants/strings';

import { Theme } from '@styles/theme';

export const Learn = () => (
  <Theme.Screen>
    <Header title={STRINGS.LEARN.title} />
    <Theme.Screen isCentered>
      <Theme.Text>{STRINGS.LEARN.title}</Theme.Text>
    </Theme.Screen>
  </Theme.Screen>
);
