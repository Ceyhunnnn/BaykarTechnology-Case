/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoadingIndicator from './../../components/loading';
import FormTitle from '../../components/FormTitle';
import TableComponent from '../../components/table';
import {styles} from './styles';
import {LineChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;
function FakeApiScreen() {
  const [fakeData, setFakeData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const tableData = [];
        json.map(data => {
          tableData.push(Object.values(data).slice(0, 3));
        });
        setFakeData({
          head: ['Sıra No', 'Adı', 'Kullanıcı Adı'],
          data: tableData,
        });
        setLoading(false);
      });
  }, []);

  const chartData = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
    datasets: [
      {
        data: [5, 7, 9, 13, 18],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['İstanbul ili Ortalama Sıcaklık'],
  };
  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: 'gray',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <ScrollView style={{flex: 1}}>
      <FormTitle title="Fake Api Veri Tablosu" />
      <View style={styles.card}>
        <TableComponent
          tableHead={fakeData.head}
          tableData={fakeData.data}
          width={[1, 2, 2]}
        />
      </View>
      <FormTitle title="Grafik Örneği" />
      <View style={styles.card}>
        <LineChart
          data={chartData}
          width={screenWidth - 20}
          height={220}
          style={{borderRadius: 5}}
          chartConfig={chartConfig}
        />
      </View>
    </ScrollView>
  );
}
export default FakeApiScreen;
