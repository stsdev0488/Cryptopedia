import React from 'react';
import { StyleSheet } from 'react-native';
import { usePromiseTracker } from 'react-promise-tracker';
import styled from 'styled-components/native';

import { COLORS, Z_INDEXES } from '@styles/constants';

import { Theme } from '@styles/theme';

const Wrapper = styled(Theme.Screen)`
  background-color: ${COLORS.blackTint};
  z-index: ${Z_INDEXES.LOADER};
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
