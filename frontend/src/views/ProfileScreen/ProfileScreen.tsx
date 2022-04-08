import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@ui-kitten/components';
import React from 'react';
import { Page, Panel } from '../../components';
import { RootStackParamList } from '../../utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route }: Props) => {
  return (
    <Page>
      <Panel title='Profile'>
        {/* TODO: Temporary data, remove it later */}
        <Text>This is {route.params.name}'s profile | Some longer text lorem ipsum</Text>
      </Panel>
    </Page>
  );
};

export default ProfileScreen;
