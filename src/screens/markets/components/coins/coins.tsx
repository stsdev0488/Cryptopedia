import React from 'react';
import { ScrollView } from 'react-native';

import { Coin, Header } from './components';

import { getCap, getChange, getPrice, getVolume } from '@services/utils';
import { useCoinsState } from './coins.state';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const Coins = () => {
  const { data } = useCoinsState();

  return (
    <Theme.Screen color={COLORS.white}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Header />
        {data.map((coin, index) => (
          <Coin
            key={coin.id}
            title={coin.name}
            index={index + 1}
            price={getPrice(coin)}
            change={getChange(coin)}
            cap={getCap(coin)}
            volume={getVolume(coin)}
            image={coin.image}
            symbol={coin.symbol}
          />
        ))}
      </ScrollView>
    </Theme.Screen>
  );
};
