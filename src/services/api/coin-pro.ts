import { apiCall } from './http';

import { API } from '@typings/api.d';

const PRO_KEY = 'b3f91bce-eee4-4427-87e9-6f6950c294da';

export const getCoins = async (count: number) => {
  const result = await apiCall(API.pro, 'get_coins')(
    { limit: count },
    {
      'X-CMC_PRO_API_KEY': PRO_KEY,
    }
  );

  if (result) {
    return result.data;
  }
  return [];
};
