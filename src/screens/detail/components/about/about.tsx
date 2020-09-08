import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import { Networks } from '../networks';
import { InfoRow, LinkRow } from './components';

import { openBrowser } from '@services/utils';
import { useAboutState } from './about.state';

import { STRINGS } from '@constants/strings';
import { COLORS } from '@styles/constants';

import { AboutStyles } from './about.styles';

interface IAboutProps {
  symbol: string;
}

export const About: FC<IAboutProps> = ({ symbol }) => {
  const { data } = useAboutState(symbol);

  const handleWhitepaperPress = () => {
    if (data?.paperUrl) {
      openBrowser(data.paperUrl);
    }
  };

  const { DETAIL } = STRINGS;

  if (!data) {
    return null;
  }

  return (
    <>
      <AboutStyles.Wrapper>
        <AboutStyles.Title fontSize="bigTitle" color={COLORS.black}>
          {DETAIL.about}
        </AboutStyles.Title>
        {data.about && (
          <AboutStyles.About color={COLORS.black}>
            {data.about}
          </AboutStyles.About>
        )}
        {data.paperUrl && (
          <TouchableHighlight
            underlayColor={COLORS.transparent}
            onPress={handleWhitepaperPress}
          >
            <AboutStyles.Whitepaper fontSize="title" color={COLORS.primaryBlue}>
              {DETAIL.whitepaper}
            </AboutStyles.Whitepaper>
          </TouchableHighlight>
        )}
        {data.creator && <InfoRow title={DETAIL.creator} text={data.creator} />}
        {data.website && (
          <LinkRow
            title={DETAIL.website}
            text={data.website.displayText}
            link={data.website.url}
          />
        )}
        {data.consensus_method && (
          <InfoRow title={DETAIL.consensus} text={data.consensus_method} />
        )}
        {data.hashing_algorithm && (
          <InfoRow title={DETAIL.hash} text={data.hashing_algorithm} />
        )}
        {data.explorer && (
          <LinkRow
            title={DETAIL.explorer}
            text={data.explorer.displayText}
            link={data.explorer.url}
          />
        )}
        {data.more_info && (
          <LinkRow
            title={DETAIL.more_info}
            text={data.more_info.displayText}
            link={data.more_info.url}
          />
        )}
      </AboutStyles.Wrapper>
      {data.networks && (
        <Networks
          twitter={data.networks.twitter}
          reddit={data.networks.reddit}
          facebook={data.networks.facebook}
        />
      )}
    </>
  );
};
