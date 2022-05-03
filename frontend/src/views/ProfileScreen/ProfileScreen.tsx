import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, Button } from '@ui-kitten/components';
import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import React from 'react';
import { StyleSheet } from 'react-native';
import { 
  Page,
  Panel,
  Input,
  PasswordInput, 
} from '../../components';
import { RootStackParamList } from '../../utils/types';

type Inputs = {
  example: string;
  password: string;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ route, navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <Page navigation={navigation} route={route}>
      <Panel title='Profile'>
        <Input
          name="example"
          label="New Email"
          control={control}
          placeholder="email@edu.pl"
          rules={{ required: 'This input is requred' }}
          error={errors.example}
          style={styles.gap}
        />
        <PasswordInput
          name="password"
          label="Password"
          control={control as unknown as Control<FieldValues, any>}
          placeholder="*****"
          error={errors.password}
          style={styles.gap}
        />
        <PasswordInput
          name="password"
          label="Password"
          control={control as unknown as Control<FieldValues, any>}
          placeholder="*****"
          error={errors.password}
          style={styles.gap}
        />
        <Button>
          Save
        </Button>
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

export default ProfileScreen;
