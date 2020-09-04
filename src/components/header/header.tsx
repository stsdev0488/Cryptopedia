import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';

import { Icon, TIconTypes } from '@components/icon';

import { IMAGES } from '@constants/images';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { HeaderStyles } from './header.styles';

interface IHeaderProps {
  title: string;
  background?: keyof typeof COLORS;
  color?: keyof typeof COLORS;
  isBack?: boolean;
  isLogo?: boolean;
  rightIcon?: TIconTypes;
  rightIconHandler?: () => void;
}

export const Header: FC<IHeaderProps> = ({
  title,
  background,
  color,
  rightIcon,
  rightIconHandler,
  isBack,
  isLogo,
}) => {
  const { top } = useSafeArea();
  const navigation = useNavigation();

  const { HEADER } = STRINGS;

  const handleBackPress = () => navigation.goBack();

  return (
    <HeaderStyles.Wrapper
      style={{
        paddingTop: top,
        backgroundColor: COLORS[background || 'primaryBlue'],
      }}
    >
      {isLogo ? (
        <HeaderStyles.LogoWrapper>
          <HeaderStyles.Logo source={IMAGES.logo} resizeMode="contain" />
        </HeaderStyles.LogoWrapper>
      ) : (
        <Theme.Text
          isCentered
          color={COLORS[color || 'white']}
          fontSize="title"
        >
          {title}
        </Theme.Text>
      )}

      {isBack && (
        <HeaderStyles.Back
          onPress={handleBackPress}
          underlayColor={COLORS.transparent}
          activeOpacity={1}
        >
          <HeaderStyles.BackContent>
            <Icon size={20} type="back" color={color || 'white'} />
            <Theme.Text color={COLORS[color || 'white']}>{HEADER.back}</Theme.Text>
          </HeaderStyles.BackContent>
        </HeaderStyles.Back>
      )}
      {rightIcon && (
        <HeaderStyles.RightIconWrapper style={{ height: top + 3 }}>
          <HeaderStyles.RightIcon
            underlayColor={COLORS.transparent}
            onPress={rightIconHandler}
          >
            <Icon size={23} type={rightIcon} color={color || 'white'} />
          </HeaderStyles.RightIcon>
        </HeaderStyles.RightIconWrapper>
      )}
    </HeaderStyles.Wrapper>
  );
};
