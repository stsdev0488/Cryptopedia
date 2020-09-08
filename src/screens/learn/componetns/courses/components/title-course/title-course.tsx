import React, { FC } from 'react';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { TitleCourseStyles } from './title-course.styles';

interface ITitleCourseProps {
  image: string;
}

export const TitleCourse: FC<ITitleCourseProps> = ({ image }) => {
  return (
    <TitleCourseStyles.Wrapper>
      <TitleCourseStyles.Content>
        <TitleCourseStyles.Image
          resizeMode="stretch"
          source={{
            uri: image,
          }}
        />
        <TitleCourseStyles.Description>
          <Theme.Text isCentered color={COLORS.white}>
            {STRINGS.LEARN.titleEducation}
          </Theme.Text>
        </TitleCourseStyles.Description>
      </TitleCourseStyles.Content>
    </TitleCourseStyles.Wrapper>
  );
};
