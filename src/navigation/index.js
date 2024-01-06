/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PathConstant} from './PathConstant';
import LoginScreen from './../screens/LoginScreen';
import DashboardScreen from './../screens/DashboardScreen';
import FakeApiScreen from './../screens/FakeApiScreen';
import RegisterScreen from './../screens/RegisterScreen';
import {useEffect} from 'react';

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
        }}
        component={DashboardScreen}
      />
      <Tab.Screen
        name={PathConstant.FAKE_API}
        options={{
          headerShown: false,
          tabBarLabel: 'Fake Api',
        }}
        component={FakeApiScreen}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  useEffect(() => {
    console.log('first');
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
