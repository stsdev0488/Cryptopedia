import React, { useContext } from 'react';
import { Modal } from 'react-native';

import { Button } from './components';
import { ModalContext } from './modal-context';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { ModalStyles } from './modal.styles';

export const ModalWrapper = () => {
  const { isOpen, setOpen } = useContext(ModalContext);

  const { MODAL } = STRINGS;

  const handlePress = () => setOpen && setOpen(false);

  return (
    <Modal animationType="fade" visible={isOpen} transparent>
      <ModalStyles.Wrapper blurType="dark">
        <ModalStyles.Content>
          <ModalStyles.Message>
            <Theme.Text
              color={COLORS.black}
              fontSize="title"
              fontWeight="medium"
              isCentered
            >
              {MODAL.title}
            </Theme.Text>
            <Theme.Text color={COLORS.darkGray} fontSize="big" isCentered>
              {MODAL.desc}
            </Theme.Text>
          </ModalStyles.Message>
          <Button
            text={MODAL.readMore}
            color={COLORS.primaryBlue}
            onPress={handlePress}
          />
          <Button
            text={MODAL.other}
            color={COLORS.primaryBlue}
            onPress={handlePress}
          />
          <Button text={MODAL.cancel} onPress={handlePress} />
        </ModalStyles.Content>
      </ModalStyles.Wrapper>
    </Modal>
  );
};
