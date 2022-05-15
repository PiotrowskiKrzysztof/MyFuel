import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Card, Page, Panel } from '../../components';
import { RootStackParamList } from '../../utils/types';

const MOCK_DATA = {
  data: [Math.random() * 10, Math.random() * 10, Math.random() * 10],
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
  'December',
];

type Props = NativeStackScreenProps<RootStackParamList, 'Statistics'>;

// https://www.npmjs.com/package/react-native-chart-kit
const StatisticsScreen = ({ navigation, route }: Props) => {
  const currentMonth = new Date().getMonth();
  return (
    <Page navigation={navigation} route={route}>
      <Panel title="Statistics">
        <>
          <ScrollView style={styles.scrollView}>
            <View>
              <Card
                status="success"
                headerText="Money spent this month"
                footerText="10% more"
                iconName='arrow-upward'
              />
              <Card
                status="danger"
                headerText="New petrol stations visited in this month"
                footerText="3"
                iconName='arrow-downward'
              />
            </View>
            <View>
              <Text style={styles.chartTitle}>Monthly fuel expenses</Text>
              <LineChart
                data={{
                  labels: MONTHS.slice(
                    (currentMonth - 2) % MONTHS.length,
                    currentMonth + 1,
                  ),
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
                  color: (opacity = 1) => 'white',
                  labelColor: (opacity = 1) => 'white',
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
                style={styles.chart}
              />
            </View>
            <Button appearance="ghost" style={styles.buttonMore}>
              Buy premium for more
            </Button>
          </ScrollView>
        </>
      </Panel>
    </Page>
  );
};

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  scrollView: {
    marginBottom: 400,
  },
  buttonMore: {
    textAlign: 'left',
  },
  chartTitle: {
    marginTop: 20,
  },
});

export default StatisticsScreen;
