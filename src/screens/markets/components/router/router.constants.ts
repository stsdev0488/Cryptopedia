import { AllCoins } from '../all-coins';
import { DeFi } from '../defi';
import { Favorites } from '../favorites';

import { IRouterRoute } from '@typings/router.d';

export const MARKETS_ROUTES = <IRouterRoute[]>[
  { key: 'allCoins' },
  { key: 'defi' },
  { key: 'favorites' },
];

export const MARKETS_SCENE_MAP = {
  allCoins: AllCoins,
  defi: DeFi,
  favorites: Favorites,
};
