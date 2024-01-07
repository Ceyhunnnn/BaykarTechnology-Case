/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {PathConstant} from './PathConstant';
import LoginScreen from './../screens/LoginScreen';
import RegisterScreen from './../screens/RegisterScreen';
import {useEffect, useState} from 'react';
import AsyncStorageService from '../service/AsyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import {setLoginState} from '../features/login/loginSlice';
import LoadingIndicator from '../components/loading';
import AppDrawerStack from './AppDrawerStack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppStack() {
  const [loading, setLoading] = useState(true);
  const isLogin = useSelector(state => state.login.value);
  const dispatch = useDispatch();
  useEffect(() => {
    async function checkUserLogin() {
      const loginData = await AsyncStorageService.getStorage('isLogin');
      dispatch(setLoginState(JSON.parse(loginData)));
      setLoading(false);
    }
    checkUserLogin();
  }, [isLogin]);
  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <Stack.Navigator>
      {!isLogin && (
        <>
          <Stack.Screen
            name={PathConstant.LOGIN}
            options={{
              headerShown: false,
              title: 'Login',
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            name={PathConstant.REGISTER}
            options={{
              headerShown: false,
              title: 'Register Form',
            }}
            component={RegisterScreen}
          />
        </>
      )}
      <Stack.Screen
        name={PathConstant.DRAWER_LAYOUT}
        component={AppDrawerStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
