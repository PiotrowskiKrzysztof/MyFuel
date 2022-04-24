import React from 'react';
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';

const Page: React.FC = ({ children }) => {
  const styles = useStyleSheet(themedStyles);

  return <Layout level="2" style={styles.container}>{children}</Layout>
}

const themedStyles = StyleService.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    padding: 32,
  },
});

export default Page;
