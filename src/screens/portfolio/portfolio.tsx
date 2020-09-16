import React from 'react';

import { Header } from '@components/header';
import { Coins, SubHeader } from './components';

import { usePortfolioState } from './portfolio.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const Portfolio = () => {
  const { spent, total, prices } = usePortfolioState();

  const { PORTFOLIO } = STRINGS;

  if (total <= 0) {
    return (
      <Theme.Screen>
        <Header title={PORTFOLIO.title} />
        <Theme.Screen isCentered>
          <Theme.Text isCentered color={COLORS.black} fontSize="big">{PORTFOLIO.track}</Theme.Text>
          <Theme.Text isCentered color={COLORS.black} fontSize="big">{PORTFOLIO.addCoins}</Theme.Text>
        </Theme.Screen>
      </Theme.Screen>
    );
  }

  return (
    <Theme.Screen>
      <Header title={STRINGS.PORTFOLIO.title} />
      <Theme.Screen>
        <SubHeader spent={spent} total={total} prices={prices} />
        <Coins />
      </Theme.Screen>
    </Theme.Screen>
  );
};
