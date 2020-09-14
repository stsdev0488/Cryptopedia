import {
  INIT_REDUX_TRANSACTION, ITransactionRedux, TRANSACTION_ACTIONS
} from './transaction.costants';

import { TTransactionActions } from './transaction.actions';

export const transactionReducer = (
  state = INIT_REDUX_TRANSACTION,
  action: TTransactionActions
): ITransactionRedux => {
  const { type, payload } = action;

  switch (type) {
    case TRANSACTION_ACTIONS.BUY:
      return {
        total: payload.price * payload.count + state.total,
        transactions: {
          ...state.transactions,
          [payload.symbol]:
            (state.transactions[payload.symbol] || 0) + payload.count,
        },
      };
    case TRANSACTION_ACTIONS.SELL:
      return {
        total: payload.price * payload.count - state.total,
        transactions: {
          ...state.transactions,
          [payload.symbol]:
            (state.transactions[payload.symbol] || 0) - payload.count,
        },
      };
    default:
      return state ?? INIT_REDUX_TRANSACTION;
  }
};
