import { combineReducers } from 'redux';

import { detailReducer, IDetailRedux } from '@screens/detail';
import { coinsReducer, ICoinsRedux } from '@screens/markets/components/coins';

export const rootReducer = combineReducers({
  detail: detailReducer,
  coins: coinsReducer,
}) as any;

export interface IReduxStore {
  detail: IDetailRedux;
  coins: ICoinsRedux;
}
