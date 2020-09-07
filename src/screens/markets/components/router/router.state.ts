import { useState } from 'react';
import { SceneMap } from 'react-native-tab-view';

import { MARKETS_ROUTES, MARKETS_SCENE_MAP } from './router.constants';

export const useMarketsRouterState = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(MARKETS_ROUTES);

  const renderScene = SceneMap(MARKETS_SCENE_MAP);

  return { index, routes, setIndex, renderScene };
};
