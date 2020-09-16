import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { getSnapshot } from '@services/api';
import { usePromise } from '@services/hooks';
import { normilizeSnapshot } from './sub-header.utils';

import { ROUTES } from '@constants/routes';
import {
  CHART_OPTIONS, DEFAULT_SNAPSHOT_DATA, TChartTypes, TIME_INTERVALS
} from './sub-header.constants';

import { ISnapshotData } from '@typings/api';

export const useSubHeaderState = (
  name: string,
  route: keyof typeof ROUTES,
  symbol: string
) => {
  const [time, setTime] = useState(TIME_INTERVALS.hours6);

  const [activePoint, setActivePoint] = useState<ISnapshotData>(
    DEFAULT_SNAPSHOT_DATA
  );
  const [touched, setTouched] = useState(false);
  const [type, setType] = useState<TChartTypes>('line');

  const [chartData] = usePromise(async () => {
    const options = CHART_OPTIONS[time] || CHART_OPTIONS[TIME_INTERVALS.hours6];

    const snapshot = await getSnapshot(
      symbol,
      'USD',
      options.count,
      options.step
    );

    return normilizeSnapshot(snapshot, options.step, options.accuracy);
  }, [time]);

  const { navigate } = useNavigation();
  const newRoute =
    route === 'homeRouter'
      ? ROUTES.transactionHome
      : route === 'portfolioRouter'
      ? ROUTES.transactionPortfolio
      : ROUTES.transaction;
  const handleAddToPorfolioPress = () =>
    navigate(newRoute, { title: name, symbol });

  return {
    time,
    handleAddToPorfolioPress,
    activePoint,
    setActivePoint,
    touched,
    setTouched,
    chartData,
    setTime,
    type,
    setType,
  };
};
