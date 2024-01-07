import isEqual from 'lodash/isEqual';
import AsyncStorageService from '../service/AsyncStorage';
import {Alert} from 'react-native';
import {PathConstant} from '../navigation/PathConstant';

export const login = async (values, navigation) => {
  const localData = await AsyncStorageService.getStorage('personal');
  const isComplated = await AsyncStorageService.getStorage('isComplated');
  const parsedData = JSON.parse(localData)
    ? {
        name: JSON.parse(localData)?.name,
        surname: JSON.parse(localData)?.surname,
      }
    : null;
  if (parsedData === null) {
    Alert.alert('Böyle bir kullanıcı bulunamadı, lütfen kayıt olun.');
  }
  if (parsedData !== null && !isEqual(parsedData, values)) {
    Alert.alert('Kullanıcı adı veya soyadı hatalı');
  } else {
    if (JSON.parse(isComplated)) {
      await AsyncStorageService.setStorage('isLogin', 'true');
      navigation.replace(PathConstant.DRAWER_LAYOUT);
    }
  }
};
