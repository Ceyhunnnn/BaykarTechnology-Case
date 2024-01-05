/* eslint-disable react/self-closing-comp */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import FormTitle from '../../../components/FormTitle';
import {Formik} from 'formik';
import {
  projectAndCVFormInitialValues,
  projectAndCVFormValidate,
} from './validation';

export default function ProjectAndCV({projectAndCVFormRef}) {
  const uploadCV = () => {};
  return (
    <View>
      <Formik
        innerRef={ref => (projectAndCVFormRef.current = ref)}
        validationSchema={projectAndCVFormValidate}
        initialValues={projectAndCVFormInitialValues}>
        {({handleChange, handleBlur, values, errors, setFieldValue}) => (
          <View>
            <FormTitle title="CV'nizi yükleyiniz" />
            <View style={styles.cvArea}>
              <Pressable style={styles.cvContent} onPress={uploadCV}>
                <Text>deneme</Text>
              </Pressable>
            </View>
            {/* <TextInput
              value={JSON.stringify(values.date).split('T')[0].split('"')[1]}
              placeholderTextColor="gray"
              placeholder="Doğum Tarihi"
              style={styles.input}
              editable={false}
              selectTextOnFocus={false}
              onPressIn={() => setOpen(true)}
            /> */}
          </View>
        )}
      </Formik>
    </View>
  );
}
