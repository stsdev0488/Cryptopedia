import React from 'react';
import { ScrollView } from 'react-native';

import { Button } from '@components/button';
import { CourseItem, TitleCourse } from './components';

import { openLink } from '@services/utils';
import { useCoursesState } from './courses.state';

import { LINKS } from '@constants/links';
import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { Theme } from '@styles/theme';
import { CoursesStyles } from './courses.styles';

export const Courses = () => {
  const { data } = useCoursesState();

  const handleEducationPress = () => openLink(LINKS.education);

  const titleCourse = data[0];

  const { LEARN } = STRINGS;

  return (
    <Theme.Screen color={COLORS.paper}>
      <ScrollView bounces={false}>
        <CoursesStyles.Content>
          <Theme.Text
            fontSize="title"
            color={COLORS.grayTitle}
            fontWeight="medium"
          >
            {LEARN.getStarted}
          </Theme.Text>
          {titleCourse && <TitleCourse image={titleCourse.imageurl} />}
          <CoursesStyles.TitleRow>
            <Theme.Text
              fontSize="title"
              color={COLORS.grayTitle}
              fontWeight="medium"
            >
              {LEARN.moreCourses}
            </Theme.Text>
            <Button
              title={LEARN.education}
              color="grayButton"
              textColor="black"
              isSmall
              onPress={handleEducationPress}
            />
          </CoursesStyles.TitleRow>
          {data.slice(1).map(({ imageurl, title, description }) => (
            <CourseItem
              key={title}
              image={imageurl}
              title={title}
              desc={description}
            />
          ))}
        </CoursesStyles.Content>
      </ScrollView>
    </Theme.Screen>
  );
};
