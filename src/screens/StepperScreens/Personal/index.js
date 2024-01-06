/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-labels */
/* eslint-disable handle-callback-err */
/* eslint-disable dot-notation */
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import {personalFormInitialValues, personalFormValidate} from './validation';
import RNPickerSelect from 'react-native-picker-select';
import PhoneInput from 'react-native-phone-input';
import DatePicker from 'react-native-date-picker';
import ErrorText from '../../../components/ErrorText';
import {genderList} from '../../../utils/ConstantData';
import FormTitle from '../../../components/FormTitle';
import {DeleteIcon} from '../../../components/Icons';

export default function PersonalScreen({personalFormRef}) {
  const [loading, setLoading] = useState(true);
  const phone = useRef();
  const [open, setOpen] = useState(false);
  const REST_COUNTRY_API = 'https://restcountries.com/v3.1/all';
  const REST_CITY_API = 'https://countriesnow.space/api/v0.1/countries/cities';
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState('');
  const [cities, setCities] = useState('');
  const uploadImage = () => {
    launchImageLibrary({}, async response => {
      if (!response.didCancel) {
        personalFormRef.current.values.photo = response.assets[0].uri;
        personalFormRef.current.validateField('photo');
      }
    }).catch(err => null);
  };
  const removeProfileImage = () => {
    personalFormRef.current.values.photo = '';
    personalFormRef.current.validateField('photo');
  };
  useEffect(() => {
    fetch(REST_COUNTRY_API)
      .then(response => response.json())
      .then(json => {
        const countryData = json?.map((country, index) => ({
          label: country?.name?.common,
          value: country?.name?.common,
          key: 'Country' + index,
        }));
        setLoading(false);
        setCountries({countryData: countryData, data: json});
      });
  }, []);
  useEffect(() => {
    if (selectedCountry) {
      fetch(REST_CITY_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({country: selectedCountry}),
      })
        .then(response => response.json())
        .then(json => {
          const cityData = json?.data?.map((city, index) => ({
            label: city,
            value: city,
            key: 'City' + index,
          }));
          setCities(cityData);
        });
    }
  }, [selectedCountry]);

  return (
    <View>
      <Formik
        innerRef={ref => (personalFormRef.current = ref)}
        validationSchema={personalFormValidate}
        initialValues={personalFormInitialValues}>
        {({handleChange, handleBlur, values, errors, setFieldValue}) => (
          <View>
            <FormTitle title={'Profil Fotoğrafı'} />
            <View style={styles.profilePhotoArea}>
              {values.photo ? (
                <>
                  <Image
                    source={{uri: values.photo}}
                    style={styles.profileImage}
                  />

                  <Pressable
                    onPress={removeProfileImage}
                    style={styles.removePhotoButton}>
                    <DeleteIcon />
                  </Pressable>
                </>
              ) : (
                <>
                  <Pressable onPress={uploadImage} style={styles.uploadButton}>
                    <Text>Fotoğraf Yükle</Text>
                  </Pressable>
                  <ErrorText text={errors.photo} />
                </>
              )}
            </View>
            <FormTitle title="Kişisel Bilgiler" />
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
              placeholderTextColor="gray"
              placeholder="Kullanıcı Soyadı"
              style={styles.input}
            />
            <ErrorText text={errors.surname} />

            <TextInput
              onChangeText={handleChange('identity')}
              onBlur={handleBlur('identity')}
              value={values.identity}
              placeholderTextColor="gray"
              placeholder="Kimlik Numarası"
              style={styles.input}
            />
            <ErrorText text={errors.identity} />

            {countries && !loading ? (
              <>
                <View style={styles.input}>
                  <RNPickerSelect
                    style={{
                      placeholder: {
                        color: 'gray',
                      },
                    }}
                    placeholder={{
                      label: 'Ülke Seçiniz',
                      value: '',
                    }}
                    items={countries.countryData}
                    onValueChange={selectedValue => {
                      setSelectedCountry(selectedValue);
                      setFieldValue('country', selectedValue);
                    }}
                    value={values.country}
                  />
                </View>
                <ErrorText text={errors.country} />
              </>
            ) : (
              <ErrorText text={'Ülkeler yükleniyor...'} />
            )}
            {cities && selectedCountry && (
              <>
                <View style={styles.input}>
                  <RNPickerSelect
                    placeholder={{label: 'Şehir Seçiniz', value: ''}}
                    items={cities}
                    style={{
                      placeholder: {
                        color: 'gray',
                      },
                    }}
                    onValueChange={selectedValue => {
                      setFieldValue('city', selectedValue);
                    }}
                    value={values.city}
                  />
                </View>
                <ErrorText text={errors.city} />
              </>
            )}
            <PhoneInput
              style={styles.input}
              textProps={{
                placeholder: 'Telefon bilgilerinizi girin',
              }}
              ref={ref => {
                phone.current = ref;
              }}
              cancelText="Kapat"
              confirmText="Seç"
              initialCountry="tr"
              onChangePhoneNumber={selectedValue => {
                setFieldValue('phone', selectedValue);
              }}
            />
            <ErrorText text={errors.phone} />

            <TextInput
              value={JSON.stringify(values.date).split('T')[0].split('"')[1]}
              placeholderTextColor="gray"
              placeholder="Doğum Tarihi"
              style={styles.input}
              editable={false}
              selectTextOnFocus={false}
              onPressIn={() => setOpen(true)}
            />
            <View>
              <DatePicker
                modal
                mode="date"
                testID="dateTimePicker"
                open={open}
                confirmText="Seç"
                cancelText="Kapat"
                date={new Date()}
                onConfirm={selectedDate => {
                  setFieldValue('date', selectedDate);
                  setOpen(false);
                }}
                locale="tr"
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
            <ErrorText text={errors.date} />
            <>
              <View style={styles.input}>
                <RNPickerSelect
                  placeholder={{label: 'Cinsiyet Seçin', value: ''}}
                  items={genderList}
                  style={{
                    placeholder: {
                      color: 'gray',
                    },
                  }}
                  onValueChange={selectedValue => {
                    setFieldValue('gender', selectedValue);
                  }}
                  value={values.gender}
                />
              </View>
              <ErrorText text={errors.gender} />
            </>
            <Pressable
              style={[styles.input, values.check ? {borderColor: 'green'} : '']}
              onPress={() => {
                setFieldValue('check', !values.check);
              }}>
              <Text style={[values.check ? {color: 'green'} : '']}>
                KVKK metnini onaylamak için tıklayın
              </Text>
            </Pressable>
            <ErrorText text={errors.check} />
          </View>
        )}
      </Formik>
    </View>
  );
}
