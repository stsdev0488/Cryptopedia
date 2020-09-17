import React from 'react';

import { Header } from '@components/header';
import { SearchHeader } from '@components/search-header';
import { MarketsRouter } from './components';

import { useMarketsState } from './markets.state';

import { STRINGS } from '@constants/strings';

import { Theme } from '@styles/theme';

export const Markets = () => {
  const {
    index,
    setIndex,
    setSearchOpen,
    setFilter,
    isSearchOpen,
    filter,
  } = useMarketsState();

  const { MARKETS } = STRINGS;

  const isFirstTab = index === 0;

  const handleSearchPress = () => setSearchOpen(true);

  return (
    <Theme.Screen>
      {isSearchOpen && setFilter ? (
        <SearchHeader
          value={filter || ''}
          setValue={setFilter}
          setOpen={setSearchOpen}
          placeholder={MARKETS.searchPlaceholder}
        />
      ) : (
        <Header
          title={MARKETS.title}
          background="white"
          color="black"
          rightIcon={isFirstTab ? 'search' : undefined}
          rightIconHandler={handleSearchPress}
        />
      )}
      <Theme.Screen>
        <MarketsRouter index={index} setIndex={setIndex} />
      </Theme.Screen>
    </Theme.Screen>
  );
};
