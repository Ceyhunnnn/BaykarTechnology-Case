/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import AppBottomStack from './AppBottomStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/drawerContent';

const DrawerStack = createDrawerNavigator();

const AppDrawerStack = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={props => <DrawerContent {...props} />}>
      <DrawerStack.Screen name="BAYKAR Teknoloji" component={AppBottomStack} />
    </DrawerStack.Navigator>
  );
};

export default AppDrawerStack;
