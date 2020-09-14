import { useReduxSelector } from '@services/hooks';
import { useCoinsState } from '../coins/coins.state';

export const useFavoritesState = () => {
  const { coins, coinList } = useCoinsState();

  const { favorites } = useReduxSelector((redux) => redux.detail);

  return {
    favorites,
    favoritesCoinInfo: coins?.filter(({ symbol }) => favorites.includes(symbol)),
    coinList,
  };
};
