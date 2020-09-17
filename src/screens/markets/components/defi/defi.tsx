import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Button } from '@components/button';
import { Chart, TopPreview } from './components';

import { useDefiState } from './defi.state';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { DefilStyles } from './defi.styles';

export const DeFi = () => {
  const { DEFI } = STRINGS;

  const { navigate } = useNavigation();

  const handlePress = () => console.log('pressed');

  const { pools, rates } = useDefiState();

  const handlePressPools = () =>
    navigate(ROUTES.defiList, {
      title: DEFI.topPools,
      list: pools,
    });

  const handlePressRates = () =>
    navigate(ROUTES.defiList, {
      title: DEFI.topRates,
      list: rates,
    });

  return (
    <Theme.Screen color={COLORS.white}>
      <DefilStyles.Wrapper>
        <DefilStyles.Row>
          <DefilStyles.ButtonWrapper>
            <Button
              title={DEFI.what}
              color="primaryBlue"
              fontSize="title"
              onPress={handlePress}
            />
          </DefilStyles.ButtonWrapper>
          <DefilStyles.ButtonWrapper>
            <Button
              title={DEFI.invest}
              color="primaryBlue"
              fontSize="title"
              onPress={handlePress}
            />
          </DefilStyles.ButtonWrapper>
        </DefilStyles.Row>
        <Chart />
        <TopPreview
          title={DEFI.topRates}
          lines={rates.slice(0, 4)}
          handlePress={handlePressRates}
        />
        <TopPreview
          title={DEFI.topPools}
          handlePress={handlePressPools}
          lines={pools.slice(0, 4)}
        />
      </DefilStyles.Wrapper>
    </Theme.Screen>
  );
};
