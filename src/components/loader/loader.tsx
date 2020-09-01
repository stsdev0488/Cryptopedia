import React from 'react';
import { StyleSheet } from 'react-native';
import { usePromiseTracker } from 'react-promise-tracker';
import styled from 'styled-components/native';

import { COLORS } from '@styles/colors';
import { Theme } from '@styles/theme';

const Wrapper = styled(Theme.Screen)`
  background-color: ${COLORS.tint};
  z-index: 1;
`;

export const Loader = () => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress ? (
    <Wrapper isCentered style={StyleSheet.absoluteFillObject}>
      <Theme.Text color={COLORS.white} fontSize="title">
        Loading...
      </Theme.Text>
    </Wrapper>
  ) : null;
};
