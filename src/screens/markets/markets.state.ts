import { useContext, useEffect, useState } from 'react';

import { SearchContext } from './components';

export const useMarketsState = () => {
  const [index, setIndex] = useState(0);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const { setFilter, filter } = useContext(SearchContext);

  useEffect(() => {
    if (index !== 0) {
      setSearchOpen(false);
    }
  }, [index]);

  return { index, filter, isSearchOpen, setSearchOpen, setIndex, setFilter };
};
