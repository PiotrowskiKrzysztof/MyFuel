import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Page } from '../../components';
import { RootStackParamList } from '../../utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const AuthenticationScreen = ({ route }: Props) => {
  return <Page>TOOD</Page>;
};

export default AuthenticationScreen;
