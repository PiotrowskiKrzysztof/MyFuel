import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

const Page: React.FC = ({ children }) => (
  <Layout style={styles.container}>{children}</Layout>
);

// TODO: Make it more generic later
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page;
