import { action } from '@services/utils';

import { COINS_ACTIONS, IUpdateCoinsPayload } from './coins.constants';

import { TActionCombiner } from '@typings/redux.d';

export const coinsActions = {
  updateCoins: (payload: IUpdateCoinsPayload) =>
    action(COINS_ACTIONS.UPDATE, payload),
};

export type TCoinsActions = ReturnType<
  TActionCombiner<typeof coinsActions>
>;
