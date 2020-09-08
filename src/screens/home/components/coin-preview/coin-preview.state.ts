import { getSnapshot } from '@services/api';
import { usePromise } from '@services/hooks';

import { ISnapshotData } from '@typings/api';

export const useCoinPreviewState = (symbol: string) => {
  const [data] = usePromise<ISnapshotData[]>(async () => {
    const result = await getSnapshot(symbol, 'USD', 24);
    return result;
  });

  return { chartData: data || [] };
};
