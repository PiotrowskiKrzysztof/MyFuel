import { Icon } from '@ui-kitten/components';
import React, { useState } from 'react';
import {
  ImageProps, TouchableWithoutFeedback
} from 'react-native';
import { Input } from '../Input';

const eyeIcon = (
  isHidden: boolean,
  callback: () => void,
  imageProps?: Partial<ImageProps>,
) => (
  <TouchableWithoutFeedback onPress={callback}>
    <Icon {...imageProps} name={isHidden ? 'eye-off' : 'eye'} />
  </TouchableWithoutFeedback>
);

type Props = React.ComponentProps<typeof Input>;

const PasswordInput = ({
  name,
  placeholder,
  control,
  rules,
  error,
  ...props
}: Props) => {
  const [isTextHidden, setTextHidden] = useState(true);

  const toggleSecureEntry = () => {
    setTextHidden(!isTextHidden);
  };

  const renderEyeIcon = (imageProps?: Partial<ImageProps>) =>
    eyeIcon(isTextHidden, toggleSecureEntry, imageProps);

  return (
    <Input
      name={name}
      control={control}
      placeholder={placeholder}
      accessoryRight={renderEyeIcon}
      secureTextEntry={isTextHidden}
      {...props}
    />
  );
};

export default PasswordInput;
