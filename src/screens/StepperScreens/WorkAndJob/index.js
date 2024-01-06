import {View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import ErrorText from '../../../components/ErrorText';
import {workAndJobFormValidate, workAndJobInitialValues} from './validation';
import {jobTypes, workTypes} from '../../../utils/constantData';
import RNPickerSelect from 'react-native-picker-select';
import FormTitle from '../../../components/FormTitle';
import globalStyles from '../../../utils/globalStyles';

export default function WorkAndJob({workAndJobFormRef}) {
  return (
    <View>
      <Formik
        innerRef={ref => (workAndJobFormRef.current = ref)}
        validationSchema={workAndJobFormValidate}
        initialValues={workAndJobInitialValues}>
        {({handleChange, handleBlur, values, errors, setFieldValue}) => (
          <View>
            <FormTitle title="Çalışma durumunuzu ve meslek bilgilerinizi giriniz" />
            <View style={globalStyles.input}>
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
            <View style={globalStyles.input}>
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
