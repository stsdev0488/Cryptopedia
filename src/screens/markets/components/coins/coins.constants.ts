import { ICoinData } from '@typings/api';

interface ICoin extends ICoinData {
  image?: string;
}

export const COINS_ACTIONS = <const>{
  UPDATE: '@COINS/UPDATE',
};

export interface ICoinsRedux {
  coins: ICoin[];
}

export interface IUpdateCoinsPayload {
  coins: ICoin[];
}

export const INIT_REDUX_COINS: ICoinsRedux = {
  coins: [],
};
