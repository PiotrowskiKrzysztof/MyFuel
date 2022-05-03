import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import {
  FormFooter,
  Input,
  Page,
  Panel,
  PasswordInput
} from '../../components';
import { RootStackParamList } from '../../utils/types';

type Inputs = {
  example: string;
  password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const AuthenticationScreen = ({ navigation, route }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Page navigation={navigation} route={route} headerVariant="unauthenticated">
      <Panel title="Login">
        <Input
          name="example"
          label="example"
          control={control}
          placeholder="sth"
          rules={{ required: 'This input is requred' }}
          error={errors.example}
          style={styles.gap}
        />
        <PasswordInput
          name="password"
          label="password"
          control={control as unknown as Control<FieldValues, any>}
          placeholder="sth"
          error={errors.password}
          style={styles.gap}
        />
        <FormFooter onSubmit={handleSubmit(onSubmit)} />
      </Panel>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  gap: {
    marginBottom: 30,
  },
});

export default AuthenticationScreen;
