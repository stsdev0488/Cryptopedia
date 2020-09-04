import React from 'react';
import { ScrollView } from 'react-native';

import { CoinHeader } from '../coin-header';
import { NewsItem, NewsListHeader } from './components';

import { useNewsListState } from './news-list.state';

import { STRINGS } from '@constants/strings';

export const NewsList = () => {
  const { HOME } = STRINGS;
  const { data } = useNewsListState();

  const newsList = data.map((item) => (
    <NewsItem key={item.id} {...item} web={item.source_info.name} />
  ));

  return (
    <ScrollView stickyHeaderIndices={[1]} bounces={false}>
      <CoinHeader />
      <NewsListHeader title={HOME.news} />
      {newsList}
    </ScrollView>
  );
};
