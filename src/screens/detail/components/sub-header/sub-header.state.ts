import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { ROUTES } from '@constants/routes';

enum TimeIntervals {
  hours6 = 'Past 6 hours',
  hours12 = 'Past 12 hours',
  hours24 = 'Past 24 hours',
  week = 'Past Week',
  month = 'Past Month',
  months3 = 'Past 3 Months',
  year = 'Past Year',
}

export const useSubHeaderState = (name: string, route: keyof typeof ROUTES, symbol: string) => {
  const [time] = useState(TimeIntervals.hours6);

  const { navigate } = useNavigation();
  const newRoute =
    route === 'homeRouter' ? ROUTES.transactionHome : ROUTES.transaction;
  const handleAddToPorfolioPress = () => navigate(newRoute, { title: name, symbol });

  return { time, handleAddToPorfolioPress };
};
