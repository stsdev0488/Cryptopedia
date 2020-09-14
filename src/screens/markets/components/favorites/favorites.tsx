import React from 'react';
import { ScrollView } from 'react-native';

import { Coin, Header } from '../coins/components';

import {
  getCap, getChange, getImage, getPrice, getVolume
} from '@services/utils';
import { useFavoritesState } from './favorites.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const Favorites = () => {
  const { favorites, favoritesCoinInfo, coinList } = useFavoritesState();

  const { MARKETS } = STRINGS;

  if (favorites.length === 0) {
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
        {favoritesCoinInfo?.map((coin, index) => (
          <Coin
            key={coin.id}
            title={coin.name}
            index={index + 1}
            price={getPrice(coin)}
            change={getChange(coin)}
            cap={getCap(coin)}
            volume={getVolume(coin)}
            image={getImage(coin.symbol, coinList)}
            symbol={coin.symbol}
          />
        ))}
      </ScrollView>
    </Theme.Screen>
  );
};
