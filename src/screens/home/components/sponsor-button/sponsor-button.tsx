import React, { useContext } from 'react';
import { TouchableHighlight } from 'react-native';

import { Icon } from '@components/icon';
import { ModalContext } from '@components/modal/modal-context';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { SponsorButtonStyles } from './sponsor-button.styles';

export const SponsorButton = () => {
  const { setOpen } = useContext(ModalContext);

  const { HOME } = STRINGS;

  const handlePress = () => setOpen && setOpen(true);

  return (
    <TouchableHighlight
      underlayColor={COLORS.transparent}
      onPress={handlePress}
    >
      <SponsorButtonStyles.Wrapper>
        <SponsorButtonStyles.Text color={COLORS.white} fontWeight="medium">
          {HOME.sponsor}
        </SponsorButtonStyles.Text>
        <Icon type="forward" size={15} color="white" />
      </SponsorButtonStyles.Wrapper>
    </TouchableHighlight>
  );
};
