import { Input as KittenInput, Text } from '@ui-kitten/components';
import React from 'react';
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

const errorMessage = (errorMessage: string) => {
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.captionText} status="danger">
        {errorMessage}
      </Text>
    </View>
  );
};

type Props<T extends FieldValues> = React.ComponentProps<typeof KittenInput> & {
  control: Control<T, any>;
  name: keyof T;
  rules?: Omit<
    RegisterOptions<T, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  error?: FieldError;
};

const Input = <T extends FieldValues>({
  name,
  placeholder = '',
  control,
  rules,
  error,
  ...props
}: Props<T>) => {
  const renderErrorMessage = error?.message && errorMessage(error.message);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <KittenInput
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          caption={renderErrorMessage}
          {...props}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
  }
});

export default Input;
