import styled from 'styled-components/native';

interface IRoundedProp {
  isRounded?: boolean;
}

export const ButtonStyles = {
  Wrapper: styled.View<IRoundedProp>`
    ${({ isRounded }) =>
      isRounded ? 'border-radius: 15px' : 'border-radius: 5px'};
    height: 30px;
    width: 100%;
    overflow: hidden;
  `,
  Touchable: styled.TouchableHighlight`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  `,
};
