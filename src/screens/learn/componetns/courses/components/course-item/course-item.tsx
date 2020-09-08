import React, { FC } from 'react';

import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CourseItemStyles } from './course-item.styles';

interface ICourseItemProps {
  image: string;
  title: string;
  desc: string;
}

export const CourseItem: FC<ICourseItemProps> = ({ image, title, desc }) => {
  return (
    <CourseItemStyles.Wrapper>
      <CourseItemStyles.ImageWrapper>
        <CourseItemStyles.ImageContent>
          <CourseItemStyles.Image
            source={{
              uri: image,
            }}
          />
        </CourseItemStyles.ImageContent>
      </CourseItemStyles.ImageWrapper>
      <Theme.Screen>
        <Theme.Text
          color={COLORS.black}
          fontSize="big"
          fontWeight="medium"
          numberOfLines={1}
        >
          {title}
        </Theme.Text>
        <Theme.Text fontSize="big" numberOfLines={2}>
          {desc}
        </Theme.Text>
      </Theme.Screen>
    </CourseItemStyles.Wrapper>
  );
};
