import styled from 'styled-components/native';

import { Theme } from '@styles/theme';

interface ITabBarItemTextProps {
  isActive?: boolean;
}

export const TabBarItemStyles = {
  Wrapper: styled.View`
    flex: 1;
  `,
  Text: styled(Theme.Text)<ITabBarItemTextProps>`
    ${({ isActive }) => isActive && 'font-weight: bold;'}
  `,
};
