import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

export const HeaderStyles = {
  Wrapper: styled.View`
    background-color: ${COLORS.primaryBlue}
    padding-bottom: 15px;
  `,
  RightIconWrapper: styled.View`
    position: absolute;
    width: 100%;
  `,
  RightIcon: styled.TouchableHighlight`
    position: absolute;
    right: 20px;
    top: 100%;
  `,
  Back: styled.TouchableHighlight`
    position: absolute;
    left: 10px;
    bottom: 10px;
  `,
  BackContent: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  LogoWrapper: styled.View`
    height: 35px;
    align-items: center;
    justify-content: center;
  `,
  Logo: styled.Image`
    height: 100%;
  `,
};
