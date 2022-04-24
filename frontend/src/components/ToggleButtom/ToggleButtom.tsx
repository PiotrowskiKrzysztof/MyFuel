import { Button, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { ImageProps, StyleSheet } from 'react-native';

type Props = {
  value: string;
  icons: [
    (props?: Partial<ImageProps>) => JSX.Element,
    (props?: Partial<ImageProps>) => JSX.Element,
  ];
  onPress: (toggleState: boolean) => void;
};

const ToggleButtom = ({ value, icons, onPress }: Props) => {
  const [state, setState] = useState(false);

  const handlePress = () => {
    setState(old => {
      onPress(!old);
      return !old;
    });
  };

  return (
    <Button
      appearance="outline"
      accessoryLeft={icons[Number(state)]}
      onPress={handlePress}>
      {evaProps => (
        <Text
          {...evaProps}
          style={{
            ...(evaProps as any) /** TODO: typing issues */.style,
            ...styles.text,
          }}>
          {value}
        </Text>
      )}
    </Button>
  );
};

const styles = StyleSheet.create({
  text: {
    textTransform: 'uppercase',
  },
});

export default ToggleButtom;
