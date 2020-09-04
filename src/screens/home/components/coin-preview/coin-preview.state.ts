import { getSnapshot } from '@services/api';
import { usePromice } from '@services/hooks';

import { ISnapshotData } from '@typings/api';

export const useCoinPreviewState = (symbol: string) => {
  const [data] = usePromice<ISnapshotData[]>(async () => {
    const result = await getSnapshot(symbol, 'USD', 24);
    return result;
  });

  return { chartData: data || [] };
};
