import { Card as KittenCard, Icon, Text } from '@ui-kitten/components';
import { EvaStatus } from '@ui-kitten/components/devsupport';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../contexts/theme.context';

type Props = {
  headerText: string;
  footerText: string;
  status: EvaStatus;
  iconName: string;
};

const Card = ({ headerText, footerText, status, iconName }: Props) => {
  const { theme: themeVariant } = useContext(ThemeContext);

  return (
    <KittenCard
      appearance="outline"
      status={status}
      style={styles.card}
      header={props => (
        <View {...props}>
          <Text style={styles.headerText} category="h6">
            {headerText}
          </Text>
        </View>
      )}>
      <Text style={styles.footerText} category="h6">{footerText}</Text>
      <Icon style={styles.icon} fill={themeVariant === 'dark' ? 'white' : 'black'} name={iconName} />
    </KittenCard>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    position: "absolute",
    right: 0,
    top: -25,
  },
  card: {
    marginVertical: 10,
  },
  headerText: {
  },
  footerText: {
    fontWeight: "bold"
  }
});

export default Card;
