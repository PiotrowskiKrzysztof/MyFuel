import React from 'react';
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';
import { BottomNavigation } from '../BottomNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HeaderVariant, RootStackParamList } from '../../utils/types';
import { RouteProp } from '@react-navigation/native';
import { View } from 'react-native';
import { Header } from '../Header';

type Props = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList>;
  headerVariant?: HeaderVariant;
  hasFooter?: boolean;
};

const Page: React.FC<Props> = ({
  navigation,
  route,
  headerVariant,
  hasFooter = true,
  children,
}) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout level="2" style={styles.layout}>
      <Header variant={headerVariant}/>
      <View style={styles.container}>{children}</View>
      {hasFooter && <BottomNavigation navigation={navigation} route={route} />}
    </Layout>
  );
};

const themedStyles = StyleService.create({
  layout: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});

export default Page;
