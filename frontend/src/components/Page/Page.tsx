import React from 'react';
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';
import { BottomNavigation } from '../BottomNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';
import { RouteProp } from '@react-navigation/native';
import { View } from 'react-native';

type Props = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList>;
};

const Page: React.FC<Props> = ({ navigation, route, children }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout level="2" style={styles.layout}>
      <View style={styles.container}>{children}</View>
      <BottomNavigation navigation={navigation} route={route} />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  layout: {
    flex: 1
  },
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: 32,
  },
});

export default Page;
