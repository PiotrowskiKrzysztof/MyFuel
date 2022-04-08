import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Page, Panel } from '../../components';
import { RootStackParamList } from '../../utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsScreen = ({ route }: Props) => {
  return (
    <Page>
      <Panel title="Settings">TODO</Panel>
    </Page>
  );
};

export default SettingsScreen;
