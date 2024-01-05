/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, Pressable, Alert, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import FormTitle from '../../../components/FormTitle';
import {Formik} from 'formik';
import {
  projectAndCVFormInitialValues,
  projectAndCVFormValidate,
} from './validation';
import DocumentPicker from 'react-native-document-picker';
import ErrorText from '../../../components/ErrorText';
import {imageList} from '../../../utils/imageList';

export default function ProjectAndCV({projectAndCVFormRef}) {
  const uploadCV = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      const uploadData = {
        uri: result.uri,
        type: result.type,
        name: result.name,
        size: result.size,
      };
      if (result) {
        projectAndCVFormRef.current.values.cvDocument = uploadData;
        projectAndCVFormRef.current.validateField('cvDocument');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        console.log(err);
        Alert.alert('Bir hata oluştu, lütfen tekrar deneyin.');
        throw err;
      }
    }
  };
  const removeDocument = () => {
    projectAndCVFormRef.current.values.cvDocument = null;
    projectAndCVFormRef.current.validateField('cvDocument');
  };
  return (
    <View>
      <Formik
        innerRef={ref => (projectAndCVFormRef.current = ref)}
        validationSchema={projectAndCVFormValidate}
        initialValues={projectAndCVFormInitialValues}>
        {({values, errors, setFieldValue}) => (
          <View>
            <FormTitle title="CV'nizi yükleyiniz" />
            <View style={styles.cvArea}>
              {values.cvDocument ? (
                <>
                  {values.cvDocument.uri && (
                    <>
                      <Image source={imageList.pdf} style={styles.pdf} />
                      <Text onPress={removeDocument} style={styles.removePdf}>
                        Sil
                      </Text>
                      {values.cvDocument.name && (
                        <Text style={styles.documentName}>
                          {values.cvDocument.name}
                        </Text>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <Pressable style={styles.cvContent} onPress={uploadCV}>
                    <Text>CV Yükle</Text>
                  </Pressable>
                  <ErrorText text={errors.cvDocument} />
                </>
              )}
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
