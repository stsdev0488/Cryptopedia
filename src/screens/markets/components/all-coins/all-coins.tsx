import { ScrollView } from 'react-native-gesture-handler';

import React from 'react';

import { Coin, Header } from './components';

import { getCap, getChange, getPrice } from '@services/utils';
import { useAllCoinsState } from './all-coins.state';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const AllCoins = () => {
  const { data } = useAllCoinsState();

  const coinList = data.map((coin, index) => (
    <Coin
      key={coin.id}
      title={coin.name}
      index={index + 1}
      price={getPrice(coin)}
      change={getChange(coin)}
      cap={getCap(coin)}
      image={coin.image}
    />
  ));

  return (
    <Theme.Screen color={COLORS.white}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Header />
        {coinList}
      </ScrollView>
    </Theme.Screen>
  );
};
