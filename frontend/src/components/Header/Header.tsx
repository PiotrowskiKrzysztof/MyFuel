import { Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { ImageProps, StyleSheet, View } from 'react-native';
import { HeaderVariant } from '../../utils/types';
import { Logo } from '../Logo';

const LogoutIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="log-out" />
);

type Props = {
  variant?: HeaderVariant;
};

const Header = ({ variant = 'authenticated' }: Props) => {
  const logoVariant = variant === 'authenticated' ? 'sm' : 'xl';
  const headerVariantStyles =
    variant === 'authenticated' ? styles.headerAuth : styles.headerUnauth;

  const handleLogout = () => {
    // TODO
  };

  return (
    <View style={{ ...styles.header, ...headerVariantStyles }}>
      <Logo variant={logoVariant} />
      {variant === 'authenticated' && (
        <Button
          accessoryLeft={LogoutIcon}
          onPress={handleLogout}
          style={styles.iconButton}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 32,
    marginTop: 16,
  },
  headerUnauth: {
    justifyContent: 'center',
  },
  headerAuth: {
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 45,
    height: 45,
  },
});

export default Header;
