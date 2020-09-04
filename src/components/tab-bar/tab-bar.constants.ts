import { TIconTypes } from '@components/icon';

import { ROUTES } from '@constants/routes';

interface ITab {
    key: string;
    icon: TIconTypes;
}

export const TABS = <ITab[]>[
  { key: ROUTES.home, icon: 'home' },
  { key: ROUTES.markets, icon: 'markets' },
  { key: ROUTES.portfolio, icon: 'portfolio' },
  { key: ROUTES.learn, icon: 'learn' },
];
