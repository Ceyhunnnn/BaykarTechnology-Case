import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../utils/globalStyles';
import {imageList} from '../../utils/imageList';
import {ApiIcon, DashboardIcon} from '../Icons';
import {PathConstant} from '../../navigation/PathConstant';
import {Logout} from '../../modules/Logout';

function DrawerContent({navigation}) {
  const logoutEvent = async () => {
    await Logout().then(() => navigation.replace(PathConstant.LOGIN));
  };

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
      <Pressable onPress={logoutEvent}>
        <Text style={globalStyles.logoutButton}>Hesabı Sil</Text>
      </Pressable>
    </SafeAreaView>
  );
}
export default DrawerContent;
