import { RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  Button,
  Icon,
  Layout,
  BottomNavigation as KittenNav,
  ButtonGroup,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import { Dimensions, ImageProps, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../../utils/types';

const HeartIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="heart" />
);

const HomeIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="home" />
);

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
};

const getActiveRoute =
  (routeName: keyof RootStackParamList) =>
  (currentRoute: keyof RootStackParamList) =>
    routeName === currentRoute ? 'filled' : 'ghost';

const BottomNavigation = ({ navigation, route }: Props) => {
  const isActiveRoute = getActiveRoute(route.name);
  return (
    <View style={styles.navigation}>
      <View style={styles.row}>
        <Button
          appearance={isActiveRoute('Home')}
          onPress={() => navigation.navigate('Home')}
          accessoryLeft={HomeIcon}
        />

        <Button
          appearance={isActiveRoute('Settings')}
          onPress={() => navigation.navigate('Settings')}
          accessoryLeft={HeartIcon}
        />
      </View>
      <View style={styles.space} />
      <Button
        style={styles.scanButton}
        onPress={() => navigation.navigate('Settings')}>
        IT
      </Button>
      <View style={styles.row}>
        <Button
          appearance={isActiveRoute('Profile')}
          onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
          accessoryLeft={HeartIcon}
        />
        <Button
          appearance={isActiveRoute('Statistics')}
          onPress={() => navigation.navigate('Statistics')}
          accessoryLeft={HeartIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space: {
    marginHorizontal: 24,
  },
  row: {
    flexDirection: "row"
  },
  scanButton: {
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    flex: 1,
    left: "60%",
    borderRadius: 9999,
    width: 80,
    height: 80,
  },
  buttonGroup: {},
});

export default BottomNavigation;
