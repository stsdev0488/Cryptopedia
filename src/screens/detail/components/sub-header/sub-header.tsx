import React, { FC } from 'react';

import { Button } from '@components/button';

import { useSubHeaderState } from './sub-header.state';

import { ROUTES } from '@constants/routes';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { SubHeaderStyles } from './sub-header.styles';

interface ISubHeaderProps {
  price: string;
  name: string;
  route: keyof typeof ROUTES;
  symbol: string;
}

export const SubHeader: FC<ISubHeaderProps> = ({ price, name, route, symbol }) => {
  const { time, handleAddToPorfolioPress } = useSubHeaderState(name, route, symbol);

  const { DETAIL } = STRINGS;

  return (
    <SubHeaderStyles.Wrapper>
      <Theme.Text fontSize="bigTitle" isCentered color={COLORS.white}>
        {price}
      </Theme.Text>
      <Theme.Text isCentered color={COLORS.white}>
        {time}
      </Theme.Text>
      <SubHeaderStyles.ButtonWrapper>
        <Button
          title={DETAIL.addToPortfolio}
          color="primaryBlue"
          onPress={handleAddToPorfolioPress}
          fontSize="big"
        />
      </SubHeaderStyles.ButtonWrapper>
    </SubHeaderStyles.Wrapper>
  );
};
