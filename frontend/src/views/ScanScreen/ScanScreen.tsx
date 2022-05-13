import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Icon,
  Text,
  useTheme,
  Layout
} from '@ui-kitten/components';
import { FlexViewCrossStyleProps } from '@ui-kitten/components/devsupport';
import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  ImageProps,
  FlatList,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { withTheme } from 'react-native-elements';
import { Page, Panel } from '../../components';
import { ThemeContext } from '../../contexts/theme.context';
import { RootStackParamList } from '../../utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Scan'>;

const ScanScreen = ({ navigation, route }: Props) => {
    const theme = useTheme();
    // const styles = useStyleSheet(themedStyles);
    const { theme: themeVariant } = useContext(ThemeContext);
    const [visibleScanView, setVisibleScanView] = useState(true);
    const [visibleHistoryView, setVisibleHistoryView] = useState(false);
    const [history, setHistory] = useState([
      {
        id: '236K20/9401/19',
        value: '135.55',
        date: '21/04/2022 19:31',
        street: 'Kawaleryjska 27',
        city: 'Białystok'
      },
      {
        id: '236K21/9401/19',
        value: '220.00',
        date: '21/04/2022 19:31',
        street: 'Kawaleryjska 27',
        city: 'Białystok'
      },
      {
        id: '236K22/9401/19',
        value: '21.37',
        date: '21/04/2022 19:31',
        street: 'Kawaleryjska 27',
        city: 'Białystok'
      },
      {
        id: '236K23/9401/19',
        value: '212.92',
        date: '21/04/2022 19:31',
        street: 'Kawaleryjska 27',
        city: 'Białystok'
      },
      {
        id: '236K24/9401/19',
        value: '82.31',
        date: '21/04/2022 19:31',
        street: 'Kawaleryjska 27',
        city: 'Białystok'
      },
      {
        id: '236K25/9401/19',
        value: '822.31',
        date: '21/04/2022 19:31',
        street: 'Kawaleryjska 27',
        city: 'Białystok'
      },
    ]);

    const visibleScan = () => {
      setVisibleScanView(true);
      setVisibleHistoryView(false);
    }

    const visibleHistory = () => {
      setVisibleScanView(false);
      setVisibleHistoryView(true);
    }

    const ScanButton = () => {
      if(visibleScanView) {
        return [
            <Icon name='camera-outline' fill='#3366FF' style={styles.icon}></Icon>,
            <Text style={[styles.bold, {color: '#3366FF'}]}>SCAN</Text>
        ]
      } else if(themeVariant === 'dark') {
        return  [
          <Icon name='camera-outline' fill='#fff' style={styles.icon}></Icon>,
          <Text style={styles.bold}>SCAN</Text>
        ]
      } else {
        return  [
          <Icon name='camera-outline' fill='#000' style={styles.icon}></Icon>,
          <Text style={styles.bold}>SCAN</Text>
        ]
      }
    }

    const HistoryButton = () => {
      if(visibleHistoryView) {
        return [
          <Icon name='book-open-outline' fill='#3366FF' style={styles.icon}></Icon>,
          <Text style={[styles.bold, {color: '#3366FF'}]}>HISTORY</Text>
      ]
      } else if(themeVariant === 'dark') {
        return  [
          <Icon name='book-open-outline' fill='#fff' style={styles.icon}></Icon>,
          <Text style={styles.bold}>HISTORY</Text>
        ]
      } else {
        return  [
          <Icon name='book-open-outline' fill='#000' style={styles.icon}></Icon>,
          <Text style={styles.bold}>HISTORY</Text>
        ]
      }
    }

    const renderView = () => {
      if(visibleScanView) {
        return (
          <View>
            <Text>SCAN</Text>
          </View>
        )
      } else {
        return (
          <View>
            <FlatList
              data={history}
              renderItem={({item}) => (
                <View key={item.id} style={styles.containerItem}>
                  <View style={styles.leftItem}>
                    <Text style={{fontSize: 12, lineHeight: 16}}>{item.date}</Text>
                    <Text style={{fontSize: 12, color: '#8F9BB3', lineHeight: 16}}>{item.street}</Text>
                    <Text style={{fontSize: 12, color: '#8F9BB3', lineHeight: 16}}>{item.city}</Text>
                  </View>
                  <View style={styles.rightItem}>
                    <Text style={{fontSize: 12, lineHeight: 16}}>{'Inovice ' + item.id}</Text>
                    <Text style={{fontSize: 16, lineHeight: 16, fontWeight: 'bold'}}>{item.value + ' PLN'}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )
      }      
    }

    return (
        <Page navigation={navigation} route={route}>
          <Panel>
              <View>
                <View style={styles.containetContent}>
                  {renderView()}
                </View>
              </View>
          </Panel>
          <View>
            <Layout style={styles.containerButtons}>
              <TouchableHighlight style={styles.scanButton} onPress={visibleScan} underlayColor='#F7F9FC'>
                <View style={styles.button__content}>
                  {ScanButton()}
                </View>                
              </TouchableHighlight>
              <TouchableHighlight style={styles.historyButton} onPress={visibleHistory} underlayColor='#F7F9FC'>
              <View style={styles.button__content}>                  
                  {HistoryButton()}
                </View> 
              </TouchableHighlight>
              <Layout style={styles.radius} level='2'></Layout>
            </Layout>              
          </View>
        </Page>
    );
};

const styles = StyleSheet.create({
  containetContent: {
    flexBasis: '65%',
  },
  containerItem: {
    // backgroundColor: 'pink',
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
    // backgroundColor: '#fff',
    height: 45,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexBasis: '50%',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  button__content: {
    flexDirection: 'row',  
  },
  historyButton: {
    // backgroundColor: '#fff',
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
    // backgroundColor: '#F7F9FC',
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
    fontWeight: 'bold'
  }
});

export default ScanScreen;
