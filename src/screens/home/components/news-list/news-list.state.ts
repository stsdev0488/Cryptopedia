import { getNews } from '@services/api';
import { usePromise } from '@services/hooks';

import { INewData } from '@typings/api';

export const useNewsListState = () => {
  const [data] = usePromise<INewData[]>(async () => {
    return await getNews();
  });

  return { data: data || [] };
};
