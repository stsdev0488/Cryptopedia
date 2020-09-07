import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const SpinnerStyles = {
  Dot: styled(Animated.View)`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: ${COLORS.white};
  `,
  Wrapper: styled.View`
    flex-direction: row;
  `,
};
