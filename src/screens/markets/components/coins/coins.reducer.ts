import { TCoinsActions } from './coins.actions';

import {
  COINS_ACTIONS, ICoinsRedux, INIT_REDUX_COINS
} from './coins.constants';

export const coinsReducer = (
  state = INIT_REDUX_COINS,
  action: TCoinsActions
): ICoinsRedux => {
  const { type, payload } = action;

  switch (type) {
    case COINS_ACTIONS.UPDATE:
      return { coins: payload.coins };
    default:
      return state ?? INIT_REDUX_COINS;
  }
};
