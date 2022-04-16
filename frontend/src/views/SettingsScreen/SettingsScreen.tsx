import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Page, Panel } from '../../components';
import { RootStackParamList } from '../../utils/types';

type Inputs = {
  example: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsScreen = ({ route }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Page>
      <Panel title="Settings Form">{/* TODO */}</Panel>
    </Page>
  );
};

export default SettingsScreen;
