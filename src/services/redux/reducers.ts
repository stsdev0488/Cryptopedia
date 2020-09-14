import { combineReducers } from 'redux';

import { detailReducer, IDetailRedux } from '@screens/detail';
import { coinsReducer, ICoinsRedux } from '@screens/markets/components/coins';
import { ITransactionRedux, transactionReducer } from '@screens/transaction';

export const rootReducer = combineReducers({
  detail: detailReducer,
  coins: coinsReducer,
  transaction: transactionReducer,
}) as any;

export interface IReduxStore {
  detail: IDetailRedux;
  coins: ICoinsRedux;
  transaction: ITransactionRedux;
}
