import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import {
  FormFooter,
  Input,
  Page,
  Panel,
  PasswordInput,
} from '../../components';
import { useAuth } from '../../contexts/auth.context';
import { SERVER } from '../../utils/constans';
import { RootStackParamList } from '../../utils/types';

type Inputs = {
  email: string;
  password: string;
  reapeatPassword: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route, navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<Inputs>();

  const { state, dispatch } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (!state.user) {
      setError('email', { message: 'Something went wrong' });
      return;
    }

    const { email, password, reapeatPassword } = data;
    if (password && password !== reapeatPassword) {
      if (!state.user) {
        setError('reapeatPassword', { message: 'Password should match' });
        return;
      }
    }

    fetch(`${SERVER}/users`, {
      method: 'PUT',
      body: JSON.stringify({ id: state.user.id, password, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'update',
          payload: { user: { ...state.user, email: res.user.email } },
        });
        Alert.alert('Update successful');
        reset();
      });
  };

  return (
    <Page navigation={navigation} route={route}>
      <Panel title="Profile">
        <Input
          name="email"
          label="new email"
          control={control}
          error={errors.email}
          rules={{
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
        />
        <PasswordInput
          name="password"
          label="new password"
          control={control as unknown as Control<FieldValues, any>}
          error={errors.password}
        />
        <PasswordInput
          name="reapeatPassword"
          label="repeat password"
          control={control as unknown as Control<FieldValues, any>}
          error={errors.reapeatPassword}
          rules={{
            minLength: {
              value: 6,
              message: 'Password is too short (Min length is 6)',
            },
          }}
        />
        <FormFooter onSubmit={handleSubmit(onSubmit)} />
      </Panel>
    </Page>
  );
};

export default ProfileScreen;
