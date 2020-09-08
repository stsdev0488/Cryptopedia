import styled from 'styled-components/native';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';

export const CoinStyles = {
  Wrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
  `,
  Col: styled.View`
    flex-direction: row;
    align-items: center;
    padding: 7px 0;
  `,
  Index: styled(Theme.Text)`
    width: 30px;
  `,
  ImageWrapper: styled.View`
    height: 15px;
    width: 15px;
    margin-right: 5px;
    border-radius: 10px;
    overflow: hidden;
  `,
  Image: styled.Image`
    height: 100%;
    width: 100%;
  `,
  Change: styled(Theme.Text)`
    width: 50px;
    text-align: right;
  `,
  Cap: styled(Theme.Text)`
    width: 70px;
    text-align: right;
  `,
  Separator: styled.View`
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    background-color: ${COLORS.lightBorder};
  `
};
