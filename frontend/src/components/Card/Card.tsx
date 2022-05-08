import { Button, Card as KittenCard, Icon, Text } from '@ui-kitten/components';
import { EvaStatus } from '@ui-kitten/components/devsupport';
import React, { useState } from 'react';
import { ImageProps, StyleSheet, View } from 'react-native';

const HeartIcon = (
  props?: Partial<ImageProps>,
): React.ReactElement<ImageProps> => <Icon {...props} name="heart" />;

type Props = {
  headerText: string;
  footerText: string;
  status: EvaStatus
};

const Card = ({ headerText, footerText, status }: Props) => {
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
      <Icon style={styles.icon} fill="red" name="heart" />
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
