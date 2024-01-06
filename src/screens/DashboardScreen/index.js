import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import AsyncStorageService from '../../service/AsyncStorage';

function DashboardScreen() {
  useEffect(() => {
    async function getAllData() {
      const data = await AsyncStorageService.getAllStorage();
      console.log(data);
    }
    getAllData();
  }, []);
  return (
    <View>
      <Text>DashboardScreen</Text>
    </View>
  );
}
export default DashboardScreen;
