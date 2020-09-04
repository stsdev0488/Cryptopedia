import styled from 'styled-components/native';

import { COLORS, FONT_SIZES } from './constants';

interface ICenteredProp {
  isCentered?: boolean;
}
interface IColorProp {
  color?: string;
}
interface IFontProps {
  fontSize?: keyof typeof FONT_SIZES;
  fontWeight?: 'normal' | 'bold' | 'medium';
  lineHeight?: number;
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

  Text: styled.Text<ICenteredProp & IColorProp & IFontProps>`
    font-size: ${({ fontSize }) => FONT_SIZES[fontSize || 'normal']};
    color: ${({ color }) => color || COLORS.primaryGray};
    ${({ isCentered }) => isCentered && 'text-align: center'};
    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px;`}
    font-family: ${({ fontWeight }) => {
      switch (fontWeight) {
        case 'normal':
          return 'CircularStd-Book';
        case 'medium':
          return 'CircularStd-Medium';
        case 'bold':
          return 'Nexa Bold';
        default:
          return 'CircularStd-Book';
      }
    }}
  `,
};
