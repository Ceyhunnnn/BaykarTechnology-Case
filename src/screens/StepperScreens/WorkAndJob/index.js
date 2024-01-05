import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Formik} from 'formik';
import ErrorText from '../../../components/ErrorText';
import {workAndJobFormValidate, workAndJobInitialValues} from './validation';
import {jobTypes, workTypes} from '../../../utils/ConstantData';
import RNPickerSelect from 'react-native-picker-select';

export default function WorkAndJob({workAndJobFormRef}) {
  return (
    <View>
      <Formik
        innerRef={ref => (workAndJobFormRef.current = ref)}
        validationSchema={workAndJobFormValidate}
        initialValues={workAndJobInitialValues}>
        {({handleChange, handleBlur, values, errors, setFieldValue}) => (
          <View>
            <View style={styles.input}>
              <RNPickerSelect
                style={{
                  placeholder: {
                    color: 'gray',
                  },
                }}
                placeholder={{
                  label: 'Çalışma Durumu Seçiniz',
                  value: '',
                }}
                items={workTypes}
                onValueChange={selectedValue => {
                  setFieldValue('workType', selectedValue);
                }}
                value={values.workType}
              />
            </View>
            <ErrorText text={errors.workType} />
            <View style={styles.input}>
              <RNPickerSelect
                style={{
                  placeholder: {
                    color: 'gray',
                  },
                }}
                placeholder={{
                  label: 'Meslek Seçiniz',
                  value: '',
                }}
                items={jobTypes}
                onValueChange={selectedValue => {
                  setFieldValue('jobType', selectedValue);
                }}
                value={values.jobType}
              />
            </View>
            <ErrorText text={errors.jobType} />
          </View>
        )}
      </Formik>
    </View>
  );
}
