import {View, Text, ActivityIndicator, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import AsyncStorageService from '../../service/AsyncStorage';
import FormTitle from '../../components/FormTitle';
import {Logout} from '../../modules/Logout';
import {PathConstant} from '../../navigation/PathConstant';

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
    // await Logout().then(() => navigation.navigate(PathConstant.LOGIN));
    AsyncStorageService.setStorage('isLogin', 'false');
  };
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <FormTitle title="kişisel veriler" />
        <Image
          source={{uri: userData.personal.photo}}
          width={100}
          height={100}
        />
        <Text>kullanıcı adı {userData.personal.name}</Text>
        <Text>kullanıcı soyadı {userData.personal.surname}</Text>
        <Text>kullanıcı ülke {userData.personal.country}</Text>
        <Text>kullanıcı şehir {userData.personal.city}</Text>
        <Text>kullanıcı cinsiyet {userData.personal.gender}</Text>
        <Text>kullanıcı telefon {userData.personal.phone}</Text>
        <Text>kullanıcı kimlik {userData.personal.identity}</Text>
        <Text>
          kullanıcı dogum tarihi {userData.personal.date.split('T')[0]}
        </Text>
      </View>
      <View>
        <FormTitle title="iş verileri" />
        <Text>kullanıcı iş durumu {userData.work.workType}</Text>
        <Text>kullanıcı meslek {userData.work.jobType}</Text>
      </View>
      <View>
        <FormTitle title="Eğitim kısımları" />
        <Text>
          kullanıcı eğitim seviyesi {userData.education.educationLevel}
        </Text>
        <Text>kullanıcı okul {userData.education.school}</Text>
        <Text>kullanıcı alanı {userData.education.department}</Text>
        <Text>kullanıcı mezun yılı {userData.education.graduationYear}</Text>
        <Text>kullancını deneyim listesi</Text>
        <View>
          {userData.education.experienceList.map(edu => (
            <Text key={edu.id}>
              {'-> adı '}
              {edu.experienceName}
              {'-> seviyesi '} {edu.experienceDegree}
            </Text>
          ))}
        </View>
      </View>
      <View>
        <FormTitle title="Proje ve CV kısımları" />
        <Text>kullanıcı projeleri</Text>
        <View>
          {userData.project.project.map(proj => (
            <Text key={proj.id}>
              {'-> adı '}
              {proj.projectName}
              {proj.detailList &&
                proj.detailList.map(detail => (
                  <Text key={detail.id}>
                    {'-> texti'}
                    {detail.value}
                  </Text>
                ))}
            </Text>
          ))}
        </View>
      </View>
      <Button title="Çıkış yap" onPress={logoutEvent} />
    </View>
  );
}
export default DashboardScreen;
