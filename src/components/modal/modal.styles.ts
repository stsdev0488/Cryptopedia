import { BlurView } from '@react-native-community/blur';
import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const ModalStyles = {
  Wrapper: styled(BlurView)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
  `,
  Content: styled.View`
    background-color: ${COLORS.white};
    width: 80%;
    padding-top: 10px;
    border-radius: 5px;
  `,
  Message: styled.View`
    padding: 10px;
  `,
};
