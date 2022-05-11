import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Icon } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { ImageProps, View } from 'react-native';
import { Page, Panel, ToggleButtom } from '../../components';
import { ThemeContext } from '../../contexts/theme.context';
import { RootStackParamList } from '../../utils/types';

const StarIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="star" />
);
const MoonIcon = (props?: Partial<ImageProps>) => (
  <Icon {...props} name="moon" />
);
const SunIcon = (props?: Partial<ImageProps>) => <Icon {...props} name="sun" />;

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsScreen = ({ navigation, route }: Props) => {
  const { toggleTheme } = useContext(ThemeContext);
  // TODO: const [isDialogOpen, setDialog] = useDialog();

  const handleDialog = (toggleState: boolean) => {
    // TODO
  };

  return (
    <Page navigation={navigation} route={route}>
      <Panel
        title="Settings Form"
        viewDescription="Sections to change application settings.">
        <View>
          <ToggleButtom
            value="get premium"
            icons={[StarIcon, StarIcon]}
            onPress={handleDialog}
          />
        </View>
        <View>
          <ToggleButtom
            value="change theme"
            icons={[MoonIcon, SunIcon]}
            onPress={toggleTheme}
          />
        </View>
      </Panel>
    </Page>
  );
};

export default SettingsScreen;
