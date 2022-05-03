import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type FormFooterProps = {
  onCancel?: () => void;
  onSubmit: () => void;
};

const FormFooter: React.FC<FormFooterProps> = ({
  onSubmit,
  onCancel,
  children,
}) => (
  <View style={styles.footerContainer}>
    <View>{children}</View>
    <View style={styles.buttonContainer}>
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
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerControl: {
    marginHorizontal: 2,
    height: 40,
  },
});

export default FormFooter;
