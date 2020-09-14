import { combineReducers } from 'redux';

import { detailReducer, IDetailRedux } from '@screens/detail';
import { ITransactionRedux, transactionReducer } from '@screens/transaction';

export const rootReducer = combineReducers({
  detail: detailReducer,
  transaction: transactionReducer,
}) as any;

export interface IReduxStore {
  detail: IDetailRedux;
  transaction: ITransactionRedux;
}
