import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type FormFooterProps = {
  onCancel?: () => void;
  onSubmit: () => void;
};

const FormFooter = ({ onSubmit, onCancel }: FormFooterProps) => (
  <View style={styles.footerContainer}>
    {onCancel && (
      <Button
        onPress={onSubmit}
        style={styles.footerControl}
        size="small"
        appearance="ghost">
        CANCEL
      </Button>
    )}
    <Button onPress={onSubmit} style={styles.footerControl} size="small">
      SUBMIT
    </Button>
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});

export default FormFooter;
