/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {styles} from './styles';
import PersonalScreen from './../StepperScreens/Personal';
import WorkAndJob from './../StepperScreens/WorkAndJob';
import Education from './../StepperScreens/Education';
import ProjectAndCV from './../StepperScreens/ProjectAndCV';
import Button from '../../components/button';
import {isObjectEmpty} from '../../utils/objectIsEmpty';
export default function RegisterScreen() {
  const personalFormRef = useRef();
  const workAndJobFormRef = useRef();
  const educationFormRef = useRef();
  const projectAndCVFormRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(3);

  const personalFormSubmit = async () => {
    await personalFormRef.current
      .submitForm()
      .then(response => console.log('Personal Form Submit : ', response))
      .catch(res => null);
    if (isObjectEmpty(personalFormRef.current.errors)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };
  const workAndJobFormSubmit = async () => {
    await workAndJobFormRef.current
      .submitForm()
      .then(response => console.log('Work Form Submit : ', response))
      .catch(res => null);
    if (isObjectEmpty(workAndJobFormRef.current.errors)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };
  const educationFormSubmit = async () => {
    await educationFormRef.current
      .submitForm()
      .then(response => console.log('Work Form Submit : ', response))
      .catch(res => null);
    if (isObjectEmpty(educationFormRef.current.errors)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };
  const projectAndCVFormSubmit = async () => {
    await projectAndCVFormRef.current
      .submitForm()
      .then(response => console.log('project Form Submit : ', response))
      .catch(res => null);
    if (isObjectEmpty(educationFormRef.current.errors)) {
    }
  };

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
