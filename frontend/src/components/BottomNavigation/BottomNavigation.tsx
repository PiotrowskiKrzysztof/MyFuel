import { RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import {
  Button,
  Icon,
  Layout,
  StyleService,
  useStyleSheet
} from '@ui-kitten/components';
import React from 'react';
import { Dimensions, ImageProps, View } from 'react-native';
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
  <Icon {...props} name="grid-outline" />
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
  const styles = useStyleSheet(themedStyles);
  const isActiveRoute = getActiveRoute(route.name);
  return (
    <Layout style={styles.navigation}>
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
        appearance={isActiveRoute('Scan')}
        onPress={() => navigation.navigate('Scan')}
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
    </Layout>
  );
};

const themedStyles = StyleService.create({
  navigation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 24,
  },
  space: {
    marginHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
  },
  scanButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    left: Dimensions.get('window').width / 2 - 40,
    width: 80,
    height: 80,
    zIndex: 100,
    flex: 1,
    borderRadius: 100,
    backgroundColor: "background-basic-color-1",
    borderColor: "color-primary-default"
  },
  navigatorButton: {
    margin: 10,
    width: 50,
  },
  buttonGroup: {},
});

export default BottomNavigation;
