export type TCurrency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD' | 'BRL';

export enum API {
  pro = 'https://pro-api.coinmarketcap.com/',
  min = 'https://min-api.cryptocompare.com/data',
}

export interface INewData {
  id: string;
  url: string;
  title: string;
  imageurl: string;
  body: string;
  source_info: {
    name: string;
  };
}

interface IQuoteData {
  price: number;
  percent_change_24h: number;
  market_cap: number;
  volume_24h: number;
}

export interface ICoinData {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD?: IQuoteData;
    EUR?: IQuoteData;
    GBP?: IQuoteData;
    JPY?: IQuoteData;
    AUD?: IQuoteData;
    CAD?: IQuoteData;
    BRL?: IQuoteData;
  };
}

interface ISnapshotData {
  time: number;
  high: number;
}

export interface ICoinListData {
  ImageUrl: string;
}

interface IGetNewsReturn {
  Data: INewData[];
}

interface IGetCoinsReturn {
  data: ICoinData[];
}

interface IGetCoinListReturn {
  Data: {
    [key: string]: ICoinListData;
  };
  BaseImageUrl: string;
}

interface IGetSnapshotReturn {
  Data: ISnapshotData[];
}

interface IGetNewsParameters {
  categories?: string;
}

interface IGetCoinsParameters {
  limit?: number;
  start?: number;
  convert?: TCurrency;
}

interface IGetSnapshotParameters {
  fsym: string;
  tsym: string;
  limit?: number;
}

export enum MethodsEndpoints {
  get_news = 'v2/news/?lang=EN',
  get_coins = 'v1/cryptocurrency/listings/latest',
  get_coin_list = 'all/coinlist',
  get_snapshot_hour = 'histohour',
  get_snapshot_minute = 'histominute',
  get_snapshot_day = 'histoday',
}

export interface IMethodsParameters {
  get_news: IGetNewsParameters;
  get_coins: IGetCoinsParameters;
  get_coin_list: {};
  get_snapshot_hour: IGetSnapshotParameters;
  get_snapshot_minute: IGetSnapshotParameters;
  get_snapshot_day: IGetSnapshotParameters;
}

export interface IMethodsReturn {
  get_news: IGetNewsReturn;
  get_coins: IGetCoinsReturn;
  get_coin_list: IGetCoinListReturn;
  get_snapshot_hour: IGetSnapshotReturn;
  get_snapshot_minute: IGetSnapshotReturn;
  get_snapshot_day: IGetSnapshotReturn;
}

export interface IMethodsHeaders {
  get_news: {};
  get_coins: {
    'X-CMC_PRO_API_KEY': string;
  };
  get_coin_list: {};
  get_snapshot_hour: {};
  get_snapshot_minute: {};
  get_snapshot_day: {};
}

export type TSnapshotStep = 'day' | 'hour' | 'minute';
