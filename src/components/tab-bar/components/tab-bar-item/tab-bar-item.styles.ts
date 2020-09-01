import styled from 'styled-components/native';

import { COLORS } from '@styles/colors';
import { Theme } from '@styles/theme';

interface IActivableProps {
  isActive?: boolean;
}

export const TabBarItemStyles = {
  Wrapper: styled.View`
    flex: 1;
  `,
  Text: styled(Theme.Text)<IActivableProps>`
    ${({ isActive }) => isActive && `color: ${COLORS.primaryBlue};`}
  `,
  IconWrapper: styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
  `,
};
