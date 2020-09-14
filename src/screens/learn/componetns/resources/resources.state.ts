import { trackPromise } from 'react-promise-tracker';

import { getResources } from '@services/api';
import { usePromise } from '@services/hooks';

export const useResourcesState = () => {
  const [data] = usePromise(async () => await trackPromise(getResources()));

  return { data: data || [] };
};
