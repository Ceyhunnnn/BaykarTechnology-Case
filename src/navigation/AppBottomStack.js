/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PathConstant} from './PathConstant';
import DashboardScreen from './../screens/DashboardScreen';
import {ApiIcon, DashboardIcon} from '../components/Icons';
import FakeApiScreen from './../screens/FakeApiScreen';

const BottomStack = createBottomTabNavigator();

const AppBottomStack = () => {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen
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
      <BottomStack.Screen
        name={PathConstant.FAKE_API}
        options={{
          headerShown: false,
          tabBarLabel: 'Fake Api',
          tabBarIcon: ({color, size}) => <ApiIcon size={size} color={color} />,
        }}
        component={FakeApiScreen}
      />
    </BottomStack.Navigator>
  );
};
export default AppBottomStack;
