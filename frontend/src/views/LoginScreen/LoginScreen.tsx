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
import { useAuth } from '../../contexts/auth.context';
import { handleLogin } from '../../utils/auth';
import { RootStackParamList } from '../../utils/types';

type Inputs = {
  email: string;
  password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation, route }: Props) => {
  const { dispatch } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    handleLogin(data, user =>
      dispatch({ type: 'login', payload: { user } }),
    ).then(async res => {
      if (!res) {
        return;
      }

      const { message } = await res.json();
      setError('email', { message });
    });
  };

  return (
    <Page
      navigation={navigation}
      route={route}
      headerVariant="unauthenticated"
      hasFooter={false}>
      <Panel title="Login form">
        <Input
          name="email"
          label="email"
          control={control}
          rules={{ required: 'This input is requred' }}
          error={errors.email}
          style={styles.gap}
        />
        <PasswordInput
          name="password"
          label="password"
          control={control as unknown as Control<FieldValues, any>}
          rules={{ required: 'This input is requred' }}
          error={errors.password}
          style={styles.gap}
        />
        <FormFooter onSubmit={handleSubmit(onSubmit)}>
          <Button
            appearance="ghost"
            style={styles.link}
            onPress={() => navigation.navigate('Register')}>
            <>
              <Text status="primary">No account?</Text>
              <Text status="primary">register!</Text>
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

export default LoginScreen;
