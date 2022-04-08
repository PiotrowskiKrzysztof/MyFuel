import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Page, Panel } from '../../components';
import { RootStackParamList } from '../../utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const StatisticsScreen = ({ route }: Props) => {
  return (
    <Page>
      <Panel title="Statistics">TODO</Panel>
    </Page>
  );
};

export default StatisticsScreen;
