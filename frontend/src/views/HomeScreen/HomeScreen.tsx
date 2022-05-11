import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Icon,
  StyleService,
  Text,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { Carousel, Page, Panel } from '../../components';
import { ThemeContext } from '../../contexts/theme.context';
import { RootStackParamList } from '../../utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation, route }: Props) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const { theme: themeVariant } = useContext(ThemeContext);

  return (
    <Page navigation={navigation} route={route}>
      <Panel>
        <Carousel
          images={[
            'https://reactnative.dev/img/tiny_logo.png',
            'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/04/1030_LL_trees-1028x579.png',
            'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          ]}
        />
        <View>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                asd.
              </Text>
              <Button style={styles.buttonMore} appearance="ghost">
                Read more
              </Button>
            </View>
            <View
              style={[
                styles.rightPanel,
                {
                  backgroundColor:
                    themeVariant === 'dark'
                      ? theme['color-primary-600']
                      : theme['color-primary-300'],
                },
              ]}>
              <Text>Premium</Text>
              <Text>29.00 PLN</Text>
              <Text>Per Month</Text>
              <FlatList
                style={styles.list}
                data={[
                  { key: 'bookkeeping' },
                  { key: 'extra stats' },
                  { key: 'no ads' },
                ]}
                renderItem={({ item }) => (
                  <View key={item.key} style={styles.item}>
                    <Icon
                      style={styles.dotIcon}
                      fill={themeVariant === 'dark' ? 'white' : 'black'}
                      name="star"
                    />
                    <Text>{item.key}</Text>
                  </View>
                )}
              />
              <Icon
                name="star"
                style={styles.icon}
                fill={
                  themeVariant === 'dark'
                    ? theme['color-primary-300']
                    : theme['color-primary-500']
                }
              />
            </View>
          </View>
        </View>
      </Panel>
    </Page>
  );
};

const themedStyles = StyleService.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonMore: {
    width: 130,
  },
  textContainer: {
    flexDirection: 'column',
  },
  description: {
    width: 140,
    paddingTop: 16,
    paddingRight: 8,
  },
  rightPanel: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    marginTop: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    height: 100,
    color: 'color-danger-900',
  },
  dotIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
});

export default HomeScreen;
