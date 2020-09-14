import { useReduxSelector } from '@services/hooks';

export const useFavoritesState = () => {
  const favoriteCoins = useReduxSelector((redux) => {
    const { coins } = redux.coins;
    const { favorites } = redux.detail;

    return coins.filter((coin) => favorites.includes(coin.symbol));
  });

  return { favoriteCoins };
};
