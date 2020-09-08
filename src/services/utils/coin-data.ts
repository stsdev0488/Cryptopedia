import { CAP_PREFIXES, CURRENCY_SYMBOLS } from '@constants/currency';

import { ICoinData, IGetCoinListReturn } from '@typings/api';

export const getPrice = (item: ICoinData) => {
  const { quote = {} } = item;

  const result = Object.entries(quote).map(([key, value]) => {
    return `${
      CURRENCY_SYMBOLS[key as keyof typeof CURRENCY_SYMBOLS] ||
      CURRENCY_SYMBOLS.USD
    }${value?.price.toFixed(2)}`;
  });
  return result[0] || '$0.00';
};

export const getChange = (item: ICoinData) => {
  const { quote = {} } = item;

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
    if (!Data[symbol]) {
      return;
    }
    const { ImageUrl } = Data[symbol];

    if (ImageUrl) {
      return `${BaseImageUrl}${ImageUrl}`;
    }
    return '';
  });
};

export const getCap = (item: ICoinData) => {
  const { quote } = item;

  const result = Object.values(quote).map((value) => value?.market_cap);

  const symbol =
    Object.keys(quote).map(
      (key) => CURRENCY_SYMBOLS[key as keyof typeof CURRENCY_SYMBOLS]
    )[0] || CURRENCY_SYMBOLS.USD;

  const cap = result[0] || 0;

  const shortCap = getShortNumber(cap);

  if (shortCap) {
    return `${symbol}${shortCap}`;
  }
  return '-';
};

export const getVolume = (item: ICoinData) => {
  const { quote } = item;

  const result = Object.values(quote).map((value) => value?.volume_24h);

  const symbol =
    Object.keys(quote).map(
      (key) => CURRENCY_SYMBOLS[key as keyof typeof CURRENCY_SYMBOLS]
    )[0] || CURRENCY_SYMBOLS.USD;

  const volume = result[0] || 0;

  const shortVolume = getShortNumber(volume);

  if (shortVolume) {
    return `${symbol}${shortVolume}`;
  }
  return '-';
};

const getShortNumber = (cap: number) => {
  const b_cap = cap / 10 ** 9;
  const m_cap = cap / 10 ** 6;
  const k_cap = cap / 10 ** 3;

  if (b_cap > 1) {
    return `${b_cap.toFixed(2)}${CAP_PREFIXES[0]}`;
  }
  if (m_cap > 1) {
    return `${m_cap.toFixed(2)}${CAP_PREFIXES[1]}`;
  }
  if (k_cap > 1) {
    return `${k_cap.toFixed(2)}${CAP_PREFIXES[2]}`;
  }
  if (cap > 0) {
    return `${cap.toFixed(2)}${CAP_PREFIXES[3]}`;
  }
};
