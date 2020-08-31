import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';

import { Header } from '@components/header';

import { ROUTES } from '@constants/routes';

import { Theme } from '@styles/theme';

export const Home = () => {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate(ROUTES.detail);

  return (
    <Theme.Screen>
      <Header title="Home" />
      <Theme.Screen isCentered>
        <Theme.Text>Home</Theme.Text>
        <Button title="To detail" onPress={handlePress} />
      </Theme.Screen>
    </Theme.Screen>
  );
};
