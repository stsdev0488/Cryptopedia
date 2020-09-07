import React from 'react';

import { useSpinnerState } from './spinner.state';

import { SpinnerStyles } from './spinner.styles';

export const Spinner = () => {
  const { sizes } = useSpinnerState();

  return (
    <SpinnerStyles.Wrapper>
      <SpinnerStyles.Dot style={{ transform: [{ scale: sizes[0] }] }} />
      <SpinnerStyles.Dot style={{ transform: [{ scale: sizes[1] }] }} />
      <SpinnerStyles.Dot style={{ transform: [{ scale: sizes[2] }] }} />
    </SpinnerStyles.Wrapper>
  );
};
