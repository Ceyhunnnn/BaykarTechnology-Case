/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PathConstant} from './PathConstant';
import LoginScreen from './../screens/LoginScreen';
import DashboardScreen from './../screens/DashboardScreen';
import FakeApiScreen from './../screens/FakeApiScreen';
import RegisterScreen from './../screens/RegisterScreen';
import {useEffect, useState} from 'react';
import AsyncStorageService from '../service/AsyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import {setLoginState} from '../features/login/loginSlice';
import {ApiIcon, DashboardIcon} from '../components/Icons';
import LoadingIndicator from '../components/loading';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeLayout = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={PathConstant.DASHBOARD}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <DashboardIcon size={size} color={color} />
          ),
        }}
        component={DashboardScreen}
      />
      <Tab.Screen
        name={PathConstant.FAKE_API}
        options={{
          headerShown: false,
          tabBarLabel: 'Fake Api',
          tabBarIcon: ({color, size}) => <ApiIcon size={size} color={color} />,
        }}
        component={FakeApiScreen}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
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
    <NavigationContainer>
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
          name={PathConstant.HOME_LAYOUT}
          component={HomeLayout}
          options={{
            title: 'HomeLayout',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
