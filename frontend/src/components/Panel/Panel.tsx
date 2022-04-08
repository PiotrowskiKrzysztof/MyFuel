import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const Header = ({ title }: Required<Pick<Props, 'title'>>) => (
  <Text category="h2" style={styles.header}>{title}</Text>
);

type Props = {
  title?: string;
};

const Panel: React.FC<Props> = ({ children, title }) => {
  return (
    <Shadow distance={6} radius={8} offset={[2, 2]} startColor={'#00000006'}>
      <View style={styles.panel}>
        {title && <Header title={title} />}
        {children}
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "left",
    marginBottom: 24,
  },
  panel: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
});

export default Panel;
