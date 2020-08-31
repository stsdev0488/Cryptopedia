import styled from 'styled-components/native';

interface ICentralizing {
  isCentered?: boolean;
}

export const Theme = {
  Screen: styled.View<ICentralizing>`
    flex: 1;
    ${({ isCentered }) =>
      isCentered &&
      `
      justify-content: center;
      align-items: center;
    `}
  `,

  Text: styled.Text<ICentralizing>`
    font-size: 16px;
    ${({ isCentered }) =>
      isCentered &&
      `
      text-align: center;
    `}
  `,
};
