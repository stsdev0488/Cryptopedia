import { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { getCoinList, getCoins } from '@services/api';
import { usePromise } from '@services/hooks';

import { MAX_COINS } from '@constants/currency';
import { COINS_PER_PAGE } from './coins.constants';

export const useCoinsState = () => {
  const [page, setPage] = useState(1);
  const [coinList] = usePromise(async () => await trackPromise(getCoinList()));
  const [coins] = usePromise(async () => await trackPromise(getCoins(MAX_COINS)));

  return {
    coins: coins?.slice(0, page * COINS_PER_PAGE),
    page,
    setPage,
    coinList,
  };
};
