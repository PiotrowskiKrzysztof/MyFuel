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
import { FlexViewCrossStyleProps } from '@ui-kitten/components/devsupport';
import React from 'react';
import { Dimensions, ImageProps, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../../utils/types';

const HomeIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="home-outline" />
);

const PersonIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="person-outline" />
);

const SettingsIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="settings-outline" />
);

const StatisticsIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="bar-chart-2-outline" />
);

const QrIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="grid-outline"/>
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
          style={styles.navigatorButton}
          appearance={isActiveRoute('Home')}
          onPress={() => navigation.navigate('Home')}
          accessoryLeft={HomeIcon}
        />
        <Button
          style={styles.navigatorButton}
          appearance={isActiveRoute('Statistics')}
          onPress={() => navigation.navigate('Statistics')}
          accessoryLeft={StatisticsIcon}
        />        
      </View>
      <View style={styles.space} />
      <Button
        style={styles.scanButton}
        onPress={() => navigation.navigate('Settings')}
        accessoryLeft={QrIcon}
      />      
      <View style={styles.row}>
        <Button
          style={styles.navigatorButton}
          appearance={isActiveRoute('Profile')}
          onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
          accessoryLeft={PersonIcon}
        />
        <Button
          style={styles.navigatorButton}
          appearance={isActiveRoute('Settings')}
          onPress={() => navigation.navigate('Settings')}
          accessoryLeft={SettingsIcon}
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
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  space: {
    marginHorizontal: 24,
  },
  row: {
    flexDirection: "row",
  },
  scanButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    left: (Dimensions.get('window').width / 2) - 40,
    width: 80,
    height: 80,
    zIndex: 100,
    flex: 1,
    borderRadius: 100,
    
  },
  navigatorButton: {
    margin: 10,
  },
  buttonGroup: {},
});

export default BottomNavigation;