import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  FormFooter, Input, Page,
  Panel, PasswordInput
} from '../../components';
import { RootStackParamList } from '../../utils/types';

type Inputs = {
  email: string;
  password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route, navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Page navigation={navigation} route={route}>
      <Panel title="Profile">
        <Input
          name="email"
          label="new email"
          control={control}
          error={errors.email}
        />
        <PasswordInput
          name="password"
          label="new password"
          control={control as unknown as Control<FieldValues, any>}
          error={errors.password}
        />
        <PasswordInput
          name="password"
          label="repeat password"
          control={control as unknown as Control<FieldValues, any>}
          error={errors.password}
        />
        <FormFooter onSubmit={handleSubmit(onSubmit)} />
      </Panel>
    </Page>
  );
};

export default ProfileScreen;
