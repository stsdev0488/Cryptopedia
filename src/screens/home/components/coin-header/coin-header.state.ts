

import { getCoinList, getCoins } from '@services/api';
import { usePromice } from '@services/hooks';
import { getImages } from '@services/utils';

import { IData } from './coin-header.typings';

export const useCoinHeaderState = () => {
  const [data] = usePromice<IData[][]>(async () => {
    const coins = await getCoins(10);
    const coinList = await getCoinList();
    const images = getImages(coins, coinList);

    const result = new Array(5).fill(1).map((el, index) => [
      { ...coins[index * 2], image: images[index * 2] },
      { ...coins[index * 2 + 1], image: images[index * 2 + 1] },
    ]);
    return result;
  });

  return { data: data || [] };
};
