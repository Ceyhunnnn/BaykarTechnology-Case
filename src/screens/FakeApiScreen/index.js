/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoadingIndicator from './../../components/loading';
import FormTitle from '../../components/FormTitle';
import TableComponent from '../../components/table';
import {styles} from './styles';
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
        setFakeData({head: ['Id', 'Name', 'Username'], data: tableData});
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={{flex: 1}}>
      <FormTitle title="Fake api veri Tablosu" />
      <View style={styles.card}>
        <TableComponent
          tableHead={fakeData.head}
          tableData={fakeData.data}
          width={[60, 150, 150]}
        />
      </View>
    </View>
  );
}
export default FakeApiScreen;
