/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TextInput,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from '../../components/button';
import {imageList} from '../../utils/imageList';
import {Formik} from 'formik';
import {loginValidation} from './validation';
import {PathConstant} from '../../navigation/PathConstant';
import ErrorText from '../../components/ErrorText';
import AsyncStorageService from '../../service/AsyncStorage';
import isEqual from 'lodash/isEqual';

export default function LoginScreen({navigation}) {
  const login = async values => {
    const localData = await AsyncStorageService.getStorage('personal');
    const isComplated = await AsyncStorageService.getStorage('isComplated');
    const parsedData = JSON.parse(localData)
      ? {
          name: JSON.parse(localData)?.name,
          surname: JSON.parse(localData)?.surname,
        }
      : null;
    if (parsedData === null) {
      Alert.alert('Böyle bir kullanıcı bulunamadı, lütfen kayıt olun.');
    }
    if (parsedData !== null && !isEqual(parsedData, values)) {
      Alert.alert('Kullanıcı adı veya soyadı hatalı');
    } else {
      if (JSON.parse(isComplated)) {
        await AsyncStorageService.setStorage('isLogin', 'true');
        navigation.replace(PathConstant.HOME_LAYOUT);
      }
    }
  };
  const navigateToRegister = () => {
    navigation.navigate(PathConstant.REGISTER);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.photoArea}>
          <Image style={styles.photo} source={imageList.logo} />
        </View>
        <View style={styles.content}>
          <View style={styles.titleArea}>
            <Text style={{fontSize: 20}}>Kullanıcı Giriş Ekranı</Text>
          </View>
          <Formik
            initialValues={{name: '', surname: ''}}
            onSubmit={values => login(values)}
            validationSchema={loginValidation}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View style={styles.inputArea}>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholderTextColor="gray"
                  placeholder="Kullanıcı Adı"
                  style={styles.input}
                />
                <ErrorText text={errors.name} />
                <TextInput
                  onChangeText={handleChange('surname')}
                  onBlur={handleBlur('surname')}
                  value={values.surname}
                  placeholder="Kullanıcı Soyadı"
                  placeholderTextColor="gray"
                  style={styles.input}
                />
                <ErrorText text={errors.surname} />
                <Button title="Giriş Yap" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.account}>
          <Text>Hesabın yok mu ?</Text>
          <Pressable onPress={navigateToRegister}>
            <Text style={styles.register}>Kayıt Ol</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
