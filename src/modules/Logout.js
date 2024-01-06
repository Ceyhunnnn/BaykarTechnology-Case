import AsyncStorageService from '../service/AsyncStorage';

export const Logout = async () => {
  AsyncStorageService.deleteAllStorage();
};
