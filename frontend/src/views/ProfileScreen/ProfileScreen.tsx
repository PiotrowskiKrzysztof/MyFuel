import React from 'react';
import { Text } from '@ui-kitten/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';
import { Page } from '../../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route }: Props) => {
  return (
    <Page>
      <Text>This is {route.params.name}'s profile</Text>
    </Page>
  );
};

export default ProfileScreen;
