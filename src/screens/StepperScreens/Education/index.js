/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import RNPickerSelect from 'react-native-picker-select';
import {Formik} from 'formik';
import ErrorText from '../../../components/ErrorText';
import {educationFormValidate, educationInitialValues} from './validation';
import {
  educationLevel,
  experinceLevel,
  graduationYear,
} from '../../../utils/constantData';
import FormTitle from '../../../components/FormTitle';
import {TextInput} from 'react-native-gesture-handler';
import {DeleteIcon} from '../../../components/Icons';
import globalStyles from '../../../utils/globalStyles';

export default function Education({educationFormRef}) {
  const [experienceModal, setExperienceModal] = useState(false);
  const [experienceName, setExperienceName] = useState('');
  const [experienceDegree, setExperienceDegree] = useState('');
  const deleteExperience = exp => {
    const updatedList = educationFormRef.current.values.experienceList.filter(
      expe => expe.id !== exp.id,
    );
    educationFormRef.current.setFieldValue('experienceList', updatedList);
  };
  return (
    <View>
      <Formik
        innerRef={ref => (educationFormRef.current = ref)}
        validationSchema={educationFormValidate}
        initialValues={educationInitialValues}>
        {({handleChange, handleBlur, values, errors, setFieldValue}) => (
          <View>
            <FormTitle title="Eğitim seviyenizi ve yetkinlik bilgilerinizi giriniz" />
            <View style={globalStyles.input}>
              <RNPickerSelect
                style={{
                  placeholder: {
                    color: 'gray',
                  },
                }}
                placeholder={{
                  label: 'Eğitim seviyenizi seçiniz',
                  value: '',
                }}
                items={educationLevel}
                onValueChange={selectedValue => {
                  setFieldValue('educationLevel', selectedValue);
                }}
                value={values.educationLevel}
              />
            </View>
            <ErrorText text={errors.educationLevel} />
            <FormTitle title="Okul Bilgileri" />
            <TextInput
              onChangeText={handleChange('school')}
              onBlur={handleBlur('school')}
              value={values.school}
              placeholderTextColor="gray"
              placeholder="Okul Adı"
              style={globalStyles.input}
            />
            <ErrorText text={errors.school} />
            <TextInput
              onChangeText={handleChange('department')}
              onBlur={handleBlur('department')}
              value={values.department}
              placeholderTextColor="gray"
              placeholder="Bölüm Adı"
              style={globalStyles.input}
            />
            <ErrorText text={errors.department} />
            <View style={globalStyles.input}>
              <RNPickerSelect
                style={{
                  placeholder: {
                    color: 'gray',
                  },
                }}
                placeholder={{
                  label: 'Mezuniyet yılınızı seçiniz',
                  value: '',
                }}
                items={graduationYear}
                onValueChange={selectedValue => {
                  setFieldValue('graduationYear', selectedValue);
                }}
                value={values.graduationYear}
              />
            </View>
            <ErrorText text={errors.graduationYear} />
            <FormTitle title="Yetkinlik Bilgileri" />
            <View style={styles.experienceArea}>
              {educationFormRef?.current?.values?.experienceList &&
                educationFormRef?.current?.values?.experienceList?.map(exp => (
                  <View style={styles.experiencePosition} key={exp.id}>
                    <View>
                      <Text style={{fontSize: 15}}>{exp.experienceName}</Text>
                      <Text style={{fontSize: 11}}>{exp.experienceDegree}</Text>
                    </View>
                    <Pressable onPress={() => deleteExperience(exp)}>
                      <DeleteIcon size={32} color="red" />
                    </Pressable>
                  </View>
                ))}
            </View>
            <Button
              title="Ekle"
              onPress={() => {
                setExperienceModal(true);
              }}
            />
            <Modal
              animationType="fade"
              transparent={true}
              visible={experienceModal}>
              <View style={globalStyles.centeredView}>
                <View style={globalStyles.modalView}>
                  <FormTitle title="Yetkinlik Adı" />
                  <TextInput
                    onChangeText={value => setExperienceName(value)}
                    value={experienceName}
                    placeholderTextColor="gray"
                    placeholder="Yetkinlik Adı"
                    style={[globalStyles.input, {width: 250}]}
                  />
                  <FormTitle title="Yetkinlik Derecesi" />
                  <View style={[globalStyles.input, {width: 250}]}>
                    <RNPickerSelect
                      style={{
                        placeholder: {
                          color: 'gray',
                        },
                      }}
                      placeholder={{
                        label: 'Yetkinlik derecenizi seçiniz',
                        value: '',
                      }}
                      items={experinceLevel}
                      onValueChange={selectedValue => {
                        setExperienceDegree(selectedValue);
                      }}
                      value={experienceDegree}
                    />
                  </View>
                  <View style={globalStyles.modalButtonArea}>
                    <Pressable
                      onPress={() => {
                        setExperienceModal(false);
                        setExperienceName('');
                        setExperienceDegree('');
                      }}>
                      <Text style={{color: 'red', fontSize: 17}}>İptal</Text>
                    </Pressable>
                    <Button
                      title="Kaydet"
                      onPress={() => {
                        if (experienceName.trim() !== '' && experienceDegree) {
                          educationFormRef.current.values.experienceList.push({
                            id:
                              educationFormRef.current.values.experienceList
                                .length + experienceDegree,
                            experienceName: experienceName.trim(),
                            experienceDegree: experienceDegree,
                          });
                          setExperienceModal(false);
                          setExperienceName('');
                          setExperienceDegree('');
                        }
                      }}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        )}
      </Formik>
    </View>
  );
}
