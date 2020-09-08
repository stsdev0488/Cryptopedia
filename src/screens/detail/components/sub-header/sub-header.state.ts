import { useState } from 'react';

enum TimeIntervals {
  hours6 = 'Past 6 hours',
  hours12 = 'Past 12 hours',
  hours24 = 'Past 24 hours',
  week = 'Past Week',
  month = 'Past Month',
  months3 = 'Past 3 Months',
  year = 'Past Year',
}

// setup for graph
export const useSubHeaderState = (name: string) => {
  const [time] = useState(TimeIntervals.hours6);

  const handleAddToPorfolioPress = () => console.log({ name });

  return { time, handleAddToPorfolioPress };
};
