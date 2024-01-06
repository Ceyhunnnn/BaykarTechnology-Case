/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import AsyncStorageService from '../../service/AsyncStorage';
import FormTitle from '../../components/FormTitle';
import {Logout} from '../../modules/Logout';
import {PathConstant} from '../../navigation/PathConstant';
import {
  CalendarIcon,
  CheckIcon,
  EducationIcon,
  ExperienceIcon,
  GenderIcon,
  GraduateIcon,
  IdentityCard,
  LocationIcon,
  PhoneIcon,
  ProjectIcon,
  StartIcon,
} from '../../components/Icons';
import {generateExperienceScore} from '../../utils/ConstantData';

function DashboardScreen({navigation}) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function getAllData() {
      const localData = await AsyncStorageService.getAllStorage();
      setUserData(localData);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    getAllData();
  }, []);
  const logoutEvent = async () => {
    await Logout().then(() => navigation.replace(PathConstant.LOGIN));
  };

  if (loading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.coverArea}>
          {/* <Image source={''} style={styles.coverPhoto} /> */}
          <Image
            style={styles.profilePhoto}
            source={{uri: userData.personal.photo}}
            width={120}
            height={120}
          />
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.names}>
            {userData.personal.name} {userData.personal.surname}
          </Text>
          <View style={styles.jobArea}>
            <Text style={{fontSize: 14}}>
              {userData.work.workType.split(' ')[0]}
            </Text>
            <View style={styles.divider} />
            <Text style={{fontSize: 14}}>{userData.work.jobType}</Text>
          </View>
        </View>
        <FormTitle title="Kişisel Bilgiler" />
        <View style={styles.card}>
          <View style={styles.infoContent}>
            <View style={styles.iconArea}>
              <IdentityCard size={20} />
            </View>
            <Text>{userData.personal.identity}</Text>
          </View>
          <View style={styles.infoContent}>
            <View style={styles.iconArea}>
              <CalendarIcon size={20} />
            </View>
            <Text>{userData.personal.date.split('T')[0]}</Text>
          </View>
          <View style={styles.infoContent}>
            <View style={styles.iconArea}>
              <GenderIcon size={20} />
            </View>
            <Text>{userData.personal.gender}</Text>
          </View>
          <View style={styles.infoContent}>
            <View style={styles.iconArea}>
              <PhoneIcon size={20} />
            </View>
            <Text>{userData.personal.phone}</Text>
          </View>
          <View style={styles.infoContent}>
            <View style={styles.iconArea}>
              <LocationIcon size={22} />
            </View>
            <Text>
              {userData.personal.city} {userData.personal.country}
            </Text>
          </View>
        </View>
        <FormTitle title="Eğitim Bilgisi" />
        <View style={styles.card}>
          <View style={[styles.infoContent, {alignItems: 'start'}]}>
            <View style={styles.iconArea}>
              <EducationIcon size={22} />
            </View>
            <View>
              <Text>{userData.education.school}</Text>
              <Text style={{color: '#4b4b4b'}}>
                {userData.education.department}
              </Text>
            </View>
          </View>
          <View style={styles.infoContent}>
            <View style={styles.iconArea}>
              <GraduateIcon size={20} />
            </View>
            <Text>
              {userData.education.graduationYear}
              {' - '}
              {userData.education.educationLevel}
            </Text>
          </View>
        </View>
        {userData.education.experienceList && (
          <>
            <FormTitle title="Deneyimler" />
            <View style={styles.card}>
              {userData.education.experienceList.map(edu => (
                <View key={edu.id} style={styles.experience}>
                  <View style={styles.infoContent}>
                    <View style={styles.iconArea}>
                      <ExperienceIcon size={20} />
                    </View>
                    <Text>{edu.experienceName}</Text>
                  </View>
                  <View style={styles.star}>
                    {Array.from(
                      {length: generateExperienceScore[edu.experienceDegree]},
                      (_, i) => (
                        <StartIcon size={18} key={i} />
                      ),
                    )}
                  </View>
                </View>
              ))}
            </View>
          </>
        )}
        {userData.project.project && (
          <>
            <FormTitle title="Projeler" />
            <View style={[styles.card, {marginBottom: 20}]}>
              {userData.project.project.map(proj => (
                <View key={proj.id}>
                  <View style={styles.infoContent}>
                    <View style={styles.iconArea}>
                      <ProjectIcon size={22} />
                    </View>
                    <Text style={{fontWeight: '600'}}>{proj.projectName}</Text>
                  </View>
                  {proj.detailList &&
                    proj.detailList.map(detail => (
                      <View key={detail.id} style={styles.projectDetailArea}>
                        <CheckIcon size={20} color="green" />
                        <Text style={{fontStyle: 'italic'}}>
                          {detail.value}
                        </Text>
                      </View>
                    ))}
                </View>
              ))}
            </View>
          </>
        )}
        <Pressable onPress={logoutEvent}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              fontSize: 18,
              color: 'red',
            }}>
            Hesabı Sil
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
export default DashboardScreen;
