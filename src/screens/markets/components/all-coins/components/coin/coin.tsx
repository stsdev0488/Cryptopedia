import React, { FC } from 'react';

import { IMAGES } from '@constants/images';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CoinStyles } from './coin.styles';

interface ICoinProps {
  index: number;
  title: string;
  price: string;
  change: number;
  cap: string;
  image?: string;
}

export const Coin: FC<ICoinProps> = ({
  index,
  title,
  price,
  change,
  cap,
  image,
}) => (
  <CoinStyles.Wrapper>
    <CoinStyles.Col>
      <CoinStyles.Index isCentered color={COLORS.primaryGray}>
        {index}
      </CoinStyles.Index>
      <CoinStyles.ImageWrapper>
        <CoinStyles.Image source={image ? { uri: image } : IMAGES.coin} />
      </CoinStyles.ImageWrapper>
      <Theme.Text color={COLORS.black} fontSize="big">
        {title}
      </Theme.Text>
    </CoinStyles.Col>
    <CoinStyles.Col>
      <Theme.Text color={COLORS.black}>{price}</Theme.Text>
      <CoinStyles.Change
        isCentered
        color={change < 0 ? COLORS.red : COLORS.green}
      >
        {change.toFixed(2)}%
      </CoinStyles.Change>
      <CoinStyles.Cap color={COLORS.black}>{cap}</CoinStyles.Cap>
    </CoinStyles.Col>
    <CoinStyles.Separator />
  </CoinStyles.Wrapper>
);
