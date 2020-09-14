import { getCoinList, getCoins } from '@services/api';
import { usePromise } from '@services/hooks';
import { getImages } from '@services/utils';

import { IData } from './coin-header.typings';

export const useCoinHeaderState = () => {
  const [pairCoinInfo] = usePromise<IData[][]>(async () => {
    const coins = await getCoins(10);
    const coinList = await getCoinList();
    const images = getImages(coins, coinList);

    if (coins.length === 10) {
      const result = new Array(5).fill(1).map((el, index) => [
        { ...coins[index * 2], image: images[index * 2] },
        { ...coins[index * 2 + 1], image: images[index * 2 + 1] },
      ]);
      return result;
    }
    return [];
  });

  return { pairCoinInfo: pairCoinInfo || [] };
};
