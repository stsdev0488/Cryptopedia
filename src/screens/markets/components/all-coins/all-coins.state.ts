import { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { getCoinList, getCoins } from '@services/api';
import { usePromice } from '@services/hooks';
import { getImages } from '@services/utils';

import { ICoinData } from '@typings/api';

const COINS_PER_PAGE = 100;

const loadCoins = async (page: number) => {
  const coins = await getCoins(COINS_PER_PAGE, page * COINS_PER_PAGE + 1);
  const coinList = await getCoinList();

  const images = getImages(coins, coinList);

  return coins.map((coin, index) => ({ ...coin, image: images[index] }));
};

export const useAllCoinsState = () => {
  const [data, setData] = useState<(ICoinData & { image?: string })[]>([]);

  usePromice(async () => {
    const coins = await trackPromise(loadCoins(0));

    setData(coins);
  });

  return { data };
};
