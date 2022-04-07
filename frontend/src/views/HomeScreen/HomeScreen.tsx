import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Icon, Text } from '@ui-kitten/components';
import { ImageProps, StyleSheet } from 'react-native';
import { Page } from '../../components';
import { RootStackParamList } from '../../utils/types';

const HeartIcon = (
  props?: Partial<ImageProps>,
): React.ReactElement<ImageProps> => <Icon {...props} name="heart" />;

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Page>
      <Text style={styles.text} category="h1">
        Welcome to UI Kitten 😻..
      </Text>
      <Text style={styles.text} category="s1">
        Start with editing App.tsx to configure your App
      </Text>
      <Text style={styles.text} appearance="hint">
        For example, try changing theme to Dark by using eva.dark
      </Text>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        style={styles.likeButton}
        accessoryLeft={HeartIcon}>
        Profile
      </Button>
    </Page>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

export default HomeScreen;
