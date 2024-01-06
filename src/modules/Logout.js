import {setLoginState} from '../features/login/loginSlice';
import AsyncStorageService from '../service/AsyncStorage';
import {store} from '../store';

export const Logout = async () => {
  store.dispatch(setLoginState(false));
  AsyncStorageService.deleteAllStorage();
};
