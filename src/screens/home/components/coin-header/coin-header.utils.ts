import { CURRENCY_SYMBOLS } from '@constants/currency';

import { ICoinData, IGetCoinListReturn } from '@typings/api';

export const getPrice = (item: ICoinData) => {
  const { quote } = item;

  const result = Object.entries(quote).map(([key, value]) => {
    return `${
      CURRENCY_SYMBOLS[key as keyof typeof CURRENCY_SYMBOLS] || '$'
    }${value?.price.toFixed(2)}`;
  });
  return result[0];
};

export const getChange = (item: ICoinData) => {
  const { quote } = item;

  const result = Object.values(quote).map((value) => value?.percent_change_24h);

  return result[0] || 0;
};

export const getImages = (
  coins: ICoinData[],
  coinList?: IGetCoinListReturn
) => {
  if (!coinList) {
    return [];
  }

  const { Data, BaseImageUrl } = coinList;

  return coins.map(({ symbol }) => {
    const { ImageUrl } = Data[symbol];

    if (ImageUrl) {
      return `${BaseImageUrl}${ImageUrl}`;
    }
    return '';
  });
};
