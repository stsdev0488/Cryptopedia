import { getNews } from '@services/api';
import { usePromice } from '@services/hooks';

import { INewData } from '@typings/api';

export const useNewsListState = () => {
  const [data] = usePromice<INewData[]>(async () => {
    const news = await getNews();
    return news;
  });

  return { data: data || [] };
};
