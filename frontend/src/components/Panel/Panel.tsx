import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { useChildStyle } from '../../hooks';

type Props = {
  title?: string;
  gap?: number;
};

const Panel: React.FC<Props> = ({ children, title, gap = 16 }) => {
  const styledChildren = useChildStyle(children, { marginBottom: gap });

  return (
    <View style={styles.stretch}>
      <Shadow
        distance={6}
        radius={8}
        offset={[2, 2]}
        startColor={'#00000006'}
        viewStyle={styles.stretch}>
        <Layout style={styles.panel}>
          {title && (
            <Text category="h2" style={styles.header}>
              {title}
            </Text>
          )}
          {styledChildren}
        </Layout>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'left',
    marginBottom: 32,
  },
  panel: {
    borderRadius: 8,
    padding: 16,
  },
  stretch: {
    width: '100%',
  }
});

export default Panel;
