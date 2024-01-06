import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageService = {
  async setStorage(name, value) {
    await AsyncStorage.setItem(name, value);
  },
  async getStorage(name) {
    return await AsyncStorage.getItem(name);
  },
  async deleteStorage(name) {
    return await AsyncStorage.removeItem(name);
  },
  async deleteAllStorage() {
    return await AsyncStorage.clear();
  },
  async getAllStorage() {
    return await AsyncStorage.multiGet([
      'personal',
      'work',
      'education',
      'project',
    ]).then(response => {
      if (response) {
        const body = {
          personal: JSON.parse(response[0][1]),
          work: JSON.parse(response[1][1]),
          education: JSON.parse(response[2][1]),
          project: JSON.parse(response[3][1]),
        };
        return body;
      }
    });
  },
};
export default AsyncStorageService;
