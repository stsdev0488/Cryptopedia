import React from 'react';
import { ScrollView } from 'react-native';

import { Coin, Header } from '../coins/components';

import { getCap, getChange, getPrice, getVolume } from '@services/utils';
import { useFavoritesState } from './favorites.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const Favorites = () => {
  const { favoriteCoins } = useFavoritesState();

  const { MARKETS } = STRINGS;

  if (favoriteCoins.length === 0) {
    return (
      <Theme.Screen color={COLORS.white} isCentered>
        <Theme.Text fontSize="big" color={COLORS.black}>
          {MARKETS.noFav}
        </Theme.Text>
        <Theme.Text fontSize="big" color={COLORS.black}>
          {MARKETS.addFav}
        </Theme.Text>
      </Theme.Screen>
    );
  }

  return (
    <Theme.Screen color={COLORS.white}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Header />
        {favoriteCoins.map((coin, index) => (
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
