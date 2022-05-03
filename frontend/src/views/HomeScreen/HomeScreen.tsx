import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Icon, Text } from '@ui-kitten/components';
import React from 'react';
import { ImageProps, StyleSheet } from 'react-native';
import { Page } from '../../components';
import { RootStackParamList } from '../../utils/types';

const HeartIcon = (
  props?: Partial<ImageProps>,
): React.ReactElement<ImageProps> => <Icon {...props} name="heart" />;

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <Page navigation={navigation} route={route}>
      <Text style={styles.text} category="h1">
        Welcome to UI Kitten 😻..
      </Text>
      <Text style={styles.text} category="s1">
        Start with editing App.tsx to configure your App
      </Text>
      <Text style={styles.text} appearance="hint">
        For example, try changing theme to Dark by using eva.dark
      </Text>

      {/* TODO: Temporary navigation, remove it later */}
      <Button
        onPress={() => navigation.navigate('Login')}
        style={styles.likeButton}
        accessoryLeft={HeartIcon}>
        Login
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
