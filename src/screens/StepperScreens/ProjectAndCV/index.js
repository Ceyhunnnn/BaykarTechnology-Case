/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  Pressable,
  Alert,
  Image,
  Button,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
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
  const [projectModal, setProjectModal] = useState(false);
  const [projectName, setProjectName] = useState();
  const [projectList, setProjectList] = useState([]);
  const uploadDocument = async () => {
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
        Alert.alert('Bir hata oluştu, lütfen tekrar deneyin.');
        throw err;
      }
    }
  };
  const removeDocument = () => {
    projectAndCVFormRef.current.values.cvDocument = null;
    projectAndCVFormRef.current.validateField('cvDocument');
  };
  const updateProjectList = project => {
    setProjectList(prevProjectList =>
      prevProjectList.map(prevProject =>
        prevProject.id === project.id ? project : prevProject,
      ),
    );
  };
  const addDetailArea = project => {
    project.detailList.push({
      name: project.detailList.length + 1 + '. detay',
      placeholder: 'Detay',
      value: '',
      id: project.detailList.length + 1,
    });
    updateProjectList(project);
  };
  const deleteProjectDetail = (project, detail) => {
    const updatedList = project.detailList.filter(
      detailItem => detailItem.id !== detail.id,
    );
    project.detailList = updatedList;
    updateProjectList(project);
  };
  const deleteProject = project => {
    const updatedList = projectList.filter(pr => pr.id !== project.id);
    setProjectList(updatedList);
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
                  <Pressable style={styles.cvContent} onPress={uploadDocument}>
                    <Text>CV Yükle</Text>
                  </Pressable>
                  <ErrorText text={errors.cvDocument} />
                </>
              )}
            </View>
            <FormTitle title="Proje ve Detayları" />
            <View style={styles.projectArea}>
              {projectList &&
                projectList?.map(project => (
                  <View key={project.id}>
                    <View style={styles.ProjectPosition}>
                      <View>
                        <Text style={{fontSize: 15}}>
                          {project.projectName}
                        </Text>
                      </View>
                      <View style={styles.eventArea}>
                        <Text
                          onPress={() => {
                            addDetailArea(project);
                          }}>
                          Detay Ekle
                        </Text>
                        <Text
                          style={{color: 'red'}}
                          onPress={() => deleteProject(project)}>
                          Sil
                        </Text>
                      </View>
                    </View>
                    <View>
                      {project.detailList.length > 0 &&
                        project.detailList.map(detail => (
                          <View key={detail.id} style={styles.dynamicArea}>
                            <TextInput
                              onChangeText={text => (detail.value = text)}
                              placeholderTextColor="gray"
                              placeholder={detail.placeholder}
                              style={styles.input}
                            />
                            <Text
                              style={{color: 'red'}}
                              onPress={() =>
                                deleteProjectDetail(project, detail)
                              }>
                              Sil
                            </Text>
                          </View>
                        ))}
                    </View>
                  </View>
                ))}
            </View>
            <Button title="Proje Ekle" onPress={() => setProjectModal(true)} />
          </View>
        )}
      </Formik>
      <Modal animationType="fade" transparent={true} visible={projectModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FormTitle title="Proje Adı" />
            <TextInput
              onChangeText={value => setProjectName(value)}
              value={projectName}
              placeholderTextColor="gray"
              placeholder="Proje Adı"
              style={[styles.input, {width: 250}]}
            />
            <View style={styles.modalButtonArea}>
              <Pressable
                onPress={() => {
                  setProjectModal(false);
                  setProjectName('');
                }}>
                <Text style={{color: 'red', fontSize: 17}}>İptal</Text>
              </Pressable>
              <Button
                title="Kaydet"
                onPress={() => {
                  if (projectName.trim() !== '') {
                    setProjectList(prevState => [
                      ...prevState,
                      {
                        id: projectList.length + projectName,
                        projectName: projectName.trim(),
                        detailList: [],
                      },
                    ]);
                    setProjectModal(false);
                    setProjectName('');
                  }
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
