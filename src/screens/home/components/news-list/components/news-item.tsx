import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { openLink } from '@services/utils';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { NewsItemStyles } from '../news-list.styles';

interface INewsItemProps {
  title?: string;
  body?: string;
  url?: string;
  imageurl?: string;
  web?: string;
}

export const NewsItem: FC<INewsItemProps> = ({
  title,
  body,
  imageurl,
  web,
  url,
}) => {
  const handlePress = () => {
    if (url) {
      openLink(url);
    }
  };

  return (
    <TouchableHighlight
      underlayColor={COLORS.transparent}
      activeOpacity={1}
      onPress={handlePress}
    >
      <NewsItemStyles.Wrapper>
        <Theme.Screen>
          <Theme.Text
            fontSize="big"
            color={COLORS.black}
            fontWeight="medium"
            lineHeight={20}
          >
            {title}
          </Theme.Text>
          <NewsItemStyles.Description
            color={COLORS.lightGray}
            numberOfLines={2}
          >
            {body}
          </NewsItemStyles.Description>
          <Theme.Text color={COLORS.lightGray}>{web}</Theme.Text>
        </Theme.Screen>
        <NewsItemStyles.ImageWrapper>
          <NewsItemStyles.Image source={{ uri: imageurl }} />
        </NewsItemStyles.ImageWrapper>
        <NewsItemStyles.Border />
      </NewsItemStyles.Wrapper>
    </TouchableHighlight>
  );
};
