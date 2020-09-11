import { TIconTypes } from '@components/icon';

import { ROUTES } from '@constants/routes';

interface ITab {
  key: string;
  icon: TIconTypes;
  keyTabs: string[];
}

export const TABS = <ITab[]>[
  { key: ROUTES.home, icon: 'home', keyTabs: [ROUTES.home, ROUTES.settings, ROUTES.detailHome, ROUTES.detailNewsHome] },
  { key: ROUTES.markets, icon: 'markets', keyTabs: [ROUTES.markets, ROUTES.detail, ROUTES.detailNews] },
  { key: ROUTES.portfolio, icon: 'portfolio', keyTabs: [ROUTES.portfolio] },
  { key: ROUTES.learn, icon: 'learn', keyTabs: [ROUTES.learn, ROUTES.courseDetail] },
];
