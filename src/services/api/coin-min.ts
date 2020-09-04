import { apiCall } from './http';

import { API, TCurrency } from '@typings/api.d';

export const getNews = async () => {
  const result = await apiCall(API.min, 'get_news')();

  if (result) {
    return result.Data;
  }
  return [];
};

export const getCoinList = async () => {
  const result = await apiCall(API.min, 'get_coin_list')();

  return result;
};

export const getSnapshot = async (
  symbol: string,
  currency: TCurrency,
  limit?: number
) => {
  const result = await apiCall(
    API.min,
    'get_snapshot'
  )({
    fsym: symbol,
    tsym: currency,
    limit: limit,
  });

  if (result?.Data) {
    return result.Data;
  }
  return [];
};
