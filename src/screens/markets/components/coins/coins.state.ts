import { useState } from 'react';

import { getCoinList, getCoins } from '@services/api';
import { usePromise } from '@services/hooks';

import { MAX_COINS } from '@constants/currency';
import { COINS_PER_PAGE } from './coins.constants';

export const useCoinsState = () => {
  const [page, setPage] = useState(1);
  const [coinList] = usePromise(async () => await getCoinList());
  const [coins] = usePromise(async () => await getCoins(MAX_COINS));

  return {
    coins: coins?.slice(0, page * COINS_PER_PAGE),
    page,
    setPage,
    coinList,
  };
};
