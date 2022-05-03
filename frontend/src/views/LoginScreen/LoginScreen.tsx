import { Link } from '@react-navigation/native';
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
  password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation, route }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Page navigation={navigation} route={route} headerVariant="unauthenticated">
      <Panel title="Login form">
        <Input
          name="login"
          label="login"
          control={control}
          rules={{ required: 'This input is requred' }}
          error={errors.login}
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
