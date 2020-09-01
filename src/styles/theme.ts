import styled from 'styled-components/native';

import { COLORS } from './colors';
import { FONT_SIZES } from './font-sizes';

interface ICenteredProp {
  isCentered?: boolean;
}
interface IColorProp {
  color?: string;
}
interface IFontSizeProp {
  fontSize?: keyof typeof FONT_SIZES;
}

export const Theme = {
  Screen: styled.View<ICenteredProp>`
    flex: 1;
    ${({ isCentered }) =>
      isCentered &&
      `
      justify-content: center;
      align-items: center;
    `}
  `,

  Text: styled.Text<ICenteredProp & IColorProp & IFontSizeProp>`
    font-size: ${({ fontSize }) => FONT_SIZES[fontSize || 'normal']}
    color: ${({ color }) => color || COLORS.primaryGray};
    ${({ isCentered }) => isCentered && 'text-align: center'};
  `,
};
