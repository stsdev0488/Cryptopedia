import { Coins } from '../coins';
import { DeFi } from '../defi';
import { Favorites } from '../favorites';

import { IRouterRoute } from '@typings/router.d';

export const MARKETS_ROUTES = <IRouterRoute[]>[
  { key: 'coins' },
  { key: 'defi' },
  { key: 'favorites' },
];

export const MARKETS_SCENE_MAP = {
  coins: Coins,
  defi: DeFi,
  favorites: Favorites,
};
