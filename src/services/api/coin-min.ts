import { apiCall } from './http';

import { API, IGetNewsParameters, TCurrency } from '@typings/api.d';

export const getNews = async (props: IGetNewsParameters = {}) => {
  const result = await apiCall(
    API.min,
    'get_news'
  )({ categories: props.categories });

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
