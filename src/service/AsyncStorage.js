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
};
export default AsyncStorageService;
