import React from 'react';
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';

const Page: React.FC = ({ children }) => {
  const styles = useStyleSheet(themedStyles);

  return <Layout style={styles.container}>{children}</Layout>
}

const themedStyles = StyleService.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'color-basic-200',
    padding: 32,
  },
});

export default Page;
