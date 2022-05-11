import { Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { ImageProps, StyleSheet, View } from 'react-native';
import { useAuth } from '../../contexts/auth.context';
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

  const { dispatch } = useAuth();
  const handleLogout = () => {
    dispatch({ type: 'logout' });
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
    marginTop: 32,
    marginBottom: 16,
    paddingHorizontal: 32,
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
