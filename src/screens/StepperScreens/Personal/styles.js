import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profilePhotoArea: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5,
  },
  uploadButton: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 30,
    borderColor: 'gray',
    height: 150,
    width: 150,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    borderRadius: 100,
    width: 150,
    height: 150,
    position: 'relative',
  },
  removePhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 120,
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    margin: 5,
  },
});
export {styles};
