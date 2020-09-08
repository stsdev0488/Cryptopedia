import React, { FC } from 'react';

import { Header } from '@components/header';
import { About, Market, News, SubHeader } from './components';

import { IDetailProps } from './detail.typings';

import { Theme } from '@styles/theme';
import { DetailStyles } from './detail.styles';

export const Detail: FC<IDetailProps> = ({ route }) => {
  const { name, price, cap, volume, change, symbol, router } = route.params;

  return (
    <Theme.Screen>
      <Header title={name} isBack color="white" background="black" />
      <DetailStyles.Wrapper bounces={false}>
        <SubHeader price={price} name={name} />
        <Market cap={cap} volume={volume} change={change} />
        <News symbol={symbol} title={name} route={router} />
        <About symbol={symbol} />
        <DetailStyles.BottomSafeArea />
      </DetailStyles.Wrapper>
    </Theme.Screen>
  );
};
