import { getCoinSnapshotBySymbol } from '@services/api';
import { usePromise } from '@services/hooks';

export const useAboutState = (symbol: string) => {
  const [data] = usePromise(async () => {
    return await getCoinSnapshotBySymbol(symbol);
  });

  return { data: data };
};
