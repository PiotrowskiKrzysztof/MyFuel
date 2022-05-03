import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Page, Panel } from '../../components';
import { RootStackParamList } from '../../utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Statistics'>;

const StatisticsScreen = ({ navigation, route }: Props) => {
  return (
    <Page navigation={navigation} route={route}>
      <Panel title="Statistics">TODO</Panel>
    </Page>
  );
};

export default StatisticsScreen;
