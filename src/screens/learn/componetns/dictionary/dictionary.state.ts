import { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { getDictionary } from '@services/api';
import { usePromise } from '@services/hooks';

export const useDictionaryState = () => {
  const [filter, setFilter] = useState('');
  const [data] = usePromise(async () => await trackPromise(getDictionary()));

  return { data: data || [], filter, setFilter };
};
