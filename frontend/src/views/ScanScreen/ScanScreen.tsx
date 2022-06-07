import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Icon,
  Text,
  useTheme,
  Layout,
  useStyleSheet,
  StyleService,
} from '@ui-kitten/components';
import React, { useContext, useState, useEffect, useMemo } from 'react';
import {
  View,
  StyleSheet,
  ImageProps,
  FlatList,
  TouchableHighlight,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { Page, Panel } from '../../components';
import { ThemeContext } from '../../contexts/theme.context';
import { RootStackParamList } from '../../utils/types';
import { SERVER } from '../../utils/constans';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

type Props = NativeStackScreenProps<RootStackParamList, 'Scan'>;

const ScanScreen = ({ navigation, route }: Props) => {
  const styles = useStyleSheet(themedStyles);
  const { theme: themeVariant } = useContext(ThemeContext);
  const [visibleView, setVisibleView] = useState(true);
  const [history, setHistory] = useState<any>([]);

  useEffect(() => {
    fetch(`${SERVER}/users/${1}/invoices`)
      .then(res => res.json())
      .then((res: any) => setHistory(res.invoices));
  });

  const visibleScan = () => {
    setVisibleView(true);
  };

  const visibleHistory = () => {
    setVisibleView(false);
  };

  const ScanButton = () => {
    if (visibleView) {
      return (
        <>
          <Icon name="camera-outline" fill="#3366FF" style={styles.icon}></Icon>
          <Text style={[styles.bold, { color: '#3366FF' }]}>SCAN</Text>
        </>
      );
    } else if (themeVariant === 'dark') {
      return (
        <>
          <Icon name="camera-outline" fill="#fff" style={styles.icon}></Icon>
          <Text style={styles.bold}>SCAN</Text>
        </>
      );
    } else {
      return (
        <>
          <Icon name="camera-outline" fill="#000" style={styles.icon}></Icon>
          <Text style={styles.bold}>SCAN</Text>
        </>
      );
    }
  };

  const memoHistory = useMemo(() => history, [history]);

  const HistoryButton = () => {
    if (!visibleView) {
      return (
        <>
          <Icon
            name="book-open-outline"
            fill="#3366FF"
            style={styles.icon}></Icon>
          <Text style={[styles.bold, { color: '#3366FF' }]}>HISTORY</Text>
        </>
      );
    } else if (themeVariant === 'dark') {
      return (
        <>
          <Icon name="book-open-outline" fill="#fff" style={styles.icon}></Icon>
          <Text style={styles.bold}>HISTORY</Text>
        </>
      );
    } else {
      return (
        <>
          <Icon name="book-open-outline" fill="#000" style={styles.icon}></Icon>
          <Text style={styles.bold}>HISTORY</Text>
        </>
      );
    }
  };

  const onSuccess = (e: any) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  const renderView = () => {
    if (visibleView) {
      return (
        <View>
          <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
            containerStyle={styles.cameraContainer}
            cameraStyle={styles.camera}
            showMarker={true}
          />
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            data={memoHistory}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.containerItem}>
                <View style={styles.leftItem}>
                  <Text style={{ fontSize: 12, lineHeight: 16 }}>
                    {new Date(item.date).toDateString()}
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: '#8F9BB3', lineHeight: 16 }}>
                    {item.street}
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: '#8F9BB3', lineHeight: 16 }}>
                    {item.city}
                  </Text>
                </View>
                <View style={styles.rightItem}>
                  <Text style={{ fontSize: 12, lineHeight: 16 }}>
                    {'Inovice ' + item.id}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 16,
                      fontWeight: 'bold',
                    }}>
                    {item.value + ' PLN'}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      );
    }
  };

  const hoverColor =
    themeVariant === 'dark'
      ? (styles.scanButtonDarkHover as any).color
      : (styles.scanButtonLightHover as any).color;

  return (
    <Page navigation={navigation} route={route}>
      <Panel>
        <View>
          <View style={styles.containetContent}>{renderView()}</View>
        </View>
      </Panel>
      <View>
        <Layout style={styles.containerButtons}>
          <TouchableHighlight
            style={styles.scanButton}
            onPress={visibleScan}
            underlayColor={hoverColor}>
            <View style={styles.button__content}>{ScanButton()}</View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.historyButton}
            onPress={visibleHistory}
            underlayColor={hoverColor}>
            <View style={styles.button__content}>{HistoryButton()}</View>
          </TouchableHighlight>
          <Layout style={styles.radius} level="2"></Layout>
        </Layout>
      </View>
    </Page>
  );
};

const themedStyles = StyleService.create({
  cameraContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  camera: {
    width: Dimensions.get('window').width * 0.65,
    height: Dimensions.get('window').height * 0.5,
    // height: '100%',
    // width: '100%',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  containetContent: {
    flexBasis: '65%',
  },
  containerItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E9F2',
  },
  leftItem: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  rightItem: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  containerButtons: {
    position: 'relative',
    top: -5,
    width: '100%',
    flexDirection: 'row',
  },
  scanButton: {
    height: 45,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexBasis: '50%',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  scanButtonDarkHover: {
    color: 'color-basic-700',
  },
  scanButtonLightHover: {
    color: 'color-basic-300',
  },
  button__content: {
    flexDirection: 'row',
  },
  historyButton: {
    height: 45,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexBasis: '50%',
    paddingRight: 15,
    paddingVertical: 5,
  },
  radius: {
    position: 'absolute',
    top: 0,
    left: Dimensions.get('window').width / 2 - 100,
    borderRadius: 100,
    width: 130,
    height: 100,
  },
  icon: {
    width: 20,
    height: 18,
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default ScanScreen;
