/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {styles} from './styles';
import PersonalScreen from './../StepperScreens/Personal';
import WorkAndJob from './../StepperScreens/WorkAndJob';
import Education from './../StepperScreens/Education';
import ProjectAndCV from './../StepperScreens/ProjectAndCV';
import Button from '../../components/button';
import {isObjectEmpty} from '../../utils/objectIsEmpty';
import AsyncStorageService from '../../service/AsyncStorage';
import isEqual from 'lodash/isEqual';
import {PathConstant} from '../../navigation/PathConstant';

export default function RegisterScreen({navigation}) {
  const [allDataAsync, setAllData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepError, setStepError] = useState(null);
  const personalFormRef = useRef();
  const workAndJobFormRef = useRef();
  const educationFormRef = useRef();
  const projectAndCVFormRef = useRef();
  const registerTabItems = [
    {
      id: 0,
      title: 'Kişisel Bilgiler',
      component: <PersonalScreen personalFormRef={personalFormRef} />,
      nextAction: async () => await personalFormSubmit(),
    },
    {
      id: 1,
      title: 'Çalışma Durumu ve Meslek Bilgileri',
      component: <WorkAndJob workAndJobFormRef={workAndJobFormRef} />,
      nextAction: async () => await workAndJobFormSubmit(),
    },
    {
      id: 2,
      title: 'Eğitim Seviyesi ve Yetkinlik Bilgileri',
      component: <Education educationFormRef={educationFormRef} />,
      nextAction: async () => await educationFormSubmit(),
    },
    {
      id: 3,
      title: 'CV ve Proje Alanı',
      component: <ProjectAndCV projectAndCVFormRef={projectAndCVFormRef} />,
      save: async () => await projectAndCVFormSubmit(),
    },
  ];
  const prevStepAction = () => {
    if (currentIndex !== -1) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };
  const nextStepAction = () => {
    if (registerTabItems[currentIndex].nextAction) {
      registerTabItems[currentIndex].nextAction();
    }
    if (registerTabItems[currentIndex].save) {
      registerTabItems[currentIndex].save();
    }
  };
  const nextPage = () => {
    setCurrentIndex(prevState => prevState + 1);
  };
  const getAllData = async () => {
    setStepError(null);
    const body = await AsyncStorageService.getAllStorage();
    setAllData(body);
  };
  const personalFormSubmit = async () => {
    await personalFormRef.current
      .submitForm()
      .then(response => console.log('Personal Form Submit : ', response))
      .catch(res => null);
    if (isObjectEmpty(personalFormRef.current.errors)) {
      await AsyncStorageService.setStorage(
        'personal',
        JSON.stringify(personalFormRef.current.values),
      )
        .then(res => {
          AsyncStorageService.setStorage('isComplated', 'false');
          nextPage();
        })
        .catch(err => {
          if (err) {
            Alert.alert('Kayıt başarısız, lütfen tekrar deneyin');
          }
        });
    }
  };
  const workAndJobFormSubmit = async () => {
    await workAndJobFormRef.current
      .submitForm()
      .then(response => console.log('Work Form Submit : ', response))
      .catch(res => null);
    await getAllData();
    if (
      allDataAsync?.work === null ||
      !isEqual(workAndJobFormRef.current.values, allDataAsync?.work)
    ) {
      await AsyncStorageService.setStorage(
        'work',
        JSON.stringify(workAndJobFormRef.current.values),
      )
        .then(res => null)
        .catch(err => {
          if (err) {
            setStepError(err);
            Alert.alert('Kayıt başarısız, lütfen tekrar deneyin');
          }
        });
    }
    if (isObjectEmpty(workAndJobFormRef.current.errors) && stepError === null) {
      nextPage();
      setStepError(null);
    }
  };
  const educationFormSubmit = async () => {
    await educationFormRef.current
      .submitForm()
      .then(response => console.log('Work Form Submit : ', response))
      .catch(res => null);
    await getAllData();
    if (
      allDataAsync?.education === null ||
      !isEqual(educationFormRef.current.values, allDataAsync?.education)
    ) {
      await AsyncStorageService.setStorage(
        'education',
        JSON.stringify(educationFormRef.current.values),
      )
        .then(res => null)
        .catch(err => {
          if (err) {
            setStepError(err);
            Alert.alert('Kayıt başarısız, lütfen tekrar deneyin');
          }
        });
    }
    if (isObjectEmpty(educationFormRef.current.errors) && stepError === null) {
      nextPage();
      setStepError(null);
    }
  };
  const projectAndCVFormSubmit = async () => {
    await projectAndCVFormRef.current
      .submitForm()
      .then(response => console.log('project Form Submit : ', response))
      .catch(res => null);
    await getAllData();
    if (
      allDataAsync?.project === null ||
      !isEqual(projectAndCVFormRef.current.values, allDataAsync?.project)
    ) {
      await AsyncStorageService.setStorage(
        'project',
        JSON.stringify(projectAndCVFormRef.current.values),
      )
        .then(res => null)
        .catch(err => {
          if (err) {
            setStepError(err);
            Alert.alert('Kayıt başarısız, lütfen tekrar deneyin');
          }
        });
    }
    if (
      isObjectEmpty(projectAndCVFormRef.current.errors) &&
      stepError === null
    ) {
      setStepError(null);
      AsyncStorageService.setStorage('isComplated', 'true').then(data => {
        Alert.alert('Kayıt başarıyla tamamlanmıştır, giriş yapabilirsiniz');
        navigation.replace(PathConstant.LOGIN);
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.stepperArea}>
            {registerTabItems.map((register, index) => {
              return (
                <View
                  key={register.title}
                  style={
                    register.id !== currentIndex
                      ? styles.hidden
                      : styles.activeTextArea
                  }>
                  <View style={styles.currentCount}>
                    <Text>{index + 1}</Text>
                  </View>
                  <Text style={styles.activeTextDecoration}>
                    {register.title}
                  </Text>
                </View>
              );
            })}
          </View>
          <View>
            {registerTabItems.map(register => {
              return (
                <View
                  key={register.id}
                  style={{
                    display: register.id === currentIndex ? 'flex' : 'none',
                  }}>
                  {register.component}
                  <View
                    style={[
                      styles.actionButtonArea,
                      {
                        justifyContent:
                          currentIndex !== 0 ? 'space-between' : 'flex-end',
                      },
                    ]}>
                    {currentIndex !== 0 && (
                      <Button
                        title="Geri"
                        onPress={prevStepAction}
                        style={{marginHorizontal: 10}}
                      />
                    )}
                    <Button
                      style={{marginHorizontal: 10}}
                      title={currentIndex === 3 ? 'Kaydet' : 'Devam Et'}
                      onPress={nextStepAction}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
