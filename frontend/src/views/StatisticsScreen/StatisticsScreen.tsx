import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Card, Page, Panel } from '../../components';
import { useAuth } from '../../contexts/auth.context';
import { SERVER } from '../../utils/constans';
import { RootStackParamList } from '../../utils/types';

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

type Response = Array<{ sum: number; date: string }>;
type Expenses = Array<number>;

const isMore = (value: number) => value >= 0;
const getStatus = (value: number) => (isMore(value) ? 'success' : 'danger');
const getIconName = (value: number) =>
  isMore(value) ? 'arrow-upward' : 'arrow-downward';

type Props = NativeStackScreenProps<RootStackParamList, 'Statistics'>;

// https://www.npmjs.com/package/react-native-chart-kit
const StatisticsScreen = ({ navigation, route }: Props) => {
  const [spentMoneyPercent, setSentMoneyPercent] = useState<number>(0);
  const [newStations, setNewStations] = useState<number>(0);
  const [expenses, setExpenses] = useState<Expenses>([]);
  const { state } = useAuth();
  
  const currentMonth = new Date().getMonth();

  const spentMoneyPercentMessage = isMore(spentMoneyPercent)
    ? `${spentMoneyPercent}% more`
    : `${spentMoneyPercent}% less`;

  const labels = MONTHS.slice(
    (currentMonth - 2) % MONTHS.length,
    currentMonth + 1,
  );

  const userId = state.user?.id

  useEffect(() => {
    fetch(`${SERVER}/statistics/${userId}/fuelExpenses/3`)
      .then(res => res.json())
      .then((res: Response) => setExpenses(res.map(it => it.sum)));

    fetch(`${SERVER}/statistics/${userId}/monthly/spentMoneyPercent`)
      .then(res => res.json())
      .then(({ difference }) => setSentMoneyPercent(Math.round(difference)));

    fetch(`${SERVER}/statistics/${userId}/monthly/patrolStationVisited`)
      .then(res => res.json())
      .then(res => setNewStations(res.new));
  }, []);

  return (
    <Page navigation={navigation} route={route}>
      <Panel title="Statistics">
        <>
          <ScrollView style={styles.scrollView}>
            <View>
              <Card
                status={getStatus(spentMoneyPercent)}
                iconName={getIconName(spentMoneyPercent)}
                headerText="Money spent this month"
                footerText={spentMoneyPercentMessage}
              />
              <Card
                status={getStatus(newStations)}
                iconName={getIconName(newStations)}
                headerText="New petrol stations visited in this month"
                footerText={newStations.toString()}
              />
            </View>
            {expenses.length > 0 && (
              <View>
                <Text style={styles.chartTitle}>Monthly fuel expenses</Text>
                <LineChart
                  data={{
                    labels,
                    datasets: [{ data: expenses }],
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
            )}

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
