/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import AppBottomStack from './AppBottomStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {PathConstant} from './PathConstant';
import {ApiIcon, DashboardIcon} from '../components/Icons';
import globalStyles from '../utils/globalStyles';
import {imageList} from '../utils/imageList';

const DrawerStack = createDrawerNavigator();
function DrawerContent({navigation}) {
  return (
    <SafeAreaView>
      <View style={globalStyles.logoAreaBaykar}>
        <Image source={imageList.BaykarLogo} style={globalStyles.baykarLogo} />
      </View>
      <Pressable
        onPress={() => navigation.navigate(PathConstant.DASHBOARD)}
        style={globalStyles.drawerMenu}>
        <DashboardIcon size={18} />
        <Text style={{fontSize: 18, fontWeight: '300'}}>Dashboard</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(PathConstant.FAKE_API)}
        style={globalStyles.drawerMenu}>
        <ApiIcon size={18} />
        <Text style={{fontSize: 18, fontWeight: '300'}}>Fake api</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const AppDrawerStack = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={props => <DrawerContent {...props} />}>
      <DrawerStack.Screen name="BAYKAR Teknoloji" component={AppBottomStack} />
    </DrawerStack.Navigator>
  );
};

export default AppDrawerStack;
