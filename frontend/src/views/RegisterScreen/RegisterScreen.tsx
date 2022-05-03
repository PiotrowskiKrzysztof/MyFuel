import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@ui-kitten/components';
import React from 'react';
import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import {
  FormFooter,
  Input,
  Page,
  Panel,
  PasswordInput,
} from '../../components';
import { RootStackParamList } from '../../utils/types';

type Inputs = {
  login: string;
  email: string;
  password: string;
  rePassword: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const RegisterScreen = ({ navigation, route }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Page navigation={navigation} route={route} headerVariant="unauthenticated">
      <Panel title="Register form">
        <Input
          name="login"
          label="login"
          control={control}
          rules={{
            required: 'Login is requred',
            maxLength: {
              value: 25,
              message: 'Login is too long (Max length is 25)',
            },
          }}
          error={errors.login}
          style={styles.gap}
        />
        <Input
          name="email"
          label="email"
          control={control}
          rules={{
            required: 'Email is requred',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          error={errors.email}
          style={styles.gap}
        />
        <PasswordInput
          name="password"
          label="password"
          control={control as unknown as Control<FieldValues, any>}
          rules={{
            required: 'Password is requred',
          }}
          error={errors.password}
          style={styles.gap}
        />
        <PasswordInput
          name="rePassword"
          label="repeat password"
          control={control as unknown as Control<FieldValues, any>}
          rules={{ required: 'Password repeat is requred' }}
          error={errors.rePassword}
          style={styles.gap}
        />
        <FormFooter onSubmit={handleSubmit(onSubmit)}>
          <Button
            appearance="ghost"
            style={styles.link}
            onPress={() => navigation.navigate('Login')}>
            <>
              <Text status="primary">Have account?</Text>
              <Text status="primary">login!</Text>
            </>
          </Button>
        </FormFooter>
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
  link: {
    flexDirection: 'column',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  gap: {
    marginBottom: 30,
  },
});

export default RegisterScreen;
