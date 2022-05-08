import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@ui-kitten/components';
import React from 'react';
import {
  Dimensions, ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Card, Page, Panel } from '../../components';
import { RootStackParamList } from '../../utils/types';

const MOCK_DATA = {
  data: [
    Math.random() * 10,
    Math.random() * 10,
    Math.random() * 10,
  ],
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];

type Props = NativeStackScreenProps<RootStackParamList, 'Statistics'>;

// https://www.npmjs.com/package/react-native-chart-kit
const StatisticsScreen = ({ navigation, route }: Props) => {
  return (
    <Page navigation={navigation} route={route}>
      <Panel title="Statistics">
        <>
          <ScrollView style={styles.scrollView}>
            <View style={styles.cards}>
              <Card
                status="success"
                headerText="Money spent this month"
                footerText="10% more"
              />
              <Card
                status="danger"
                headerText="New petrol stations visited in this month"
                footerText="3"
              />
            </View>
            <View>
              <Text style={styles.chartTitle}>Bezier Line Chart</Text>
              <LineChart
                data={{
                  labels: MONTHS.slice(3, 6),
                  datasets: [MOCK_DATA],
                }}
                width={Dimensions.get('window').width - 130}
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  decimalPlaces: 2,
                  color: (opacity = 1) => `white`,
                  labelColor: (opacity = 1) => `white`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </ScrollView>
        </>
      </Panel>
    </Page>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 400,
  },
  cards: {},
  chartTitle: {
    marginTop: 20
  }
});

export default StatisticsScreen;
