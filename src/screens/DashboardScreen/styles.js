import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverArea: {
    width: 'auto',
    height: 150,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#dddddd',
  },
  coverPhoto: {
    width: '100%',
    height: 150,
  },
  profilePhoto: {
    position: 'absolute',
    bottom: -60,
    borderRadius: 20,
  },
  infoArea: {
    marginTop: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  names: {textAlign: 'center', marginTop: 5, fontWeight: '600', fontSize: 18},
  jobArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 8,
  },
  divider: {
    height: 20,
    width: 1,
    backgroundColor: 'gray',
  },
  card: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    gap: 10,
    shadowColor: 'black',
    shadowOffset: 0.1,
    shadowOpacity: 0.1,
  },
  iconArea: {
    width: 25,
  },
  infoContent: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  experience: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  star: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  projectDetailArea: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginLeft: 30,
    marginVertical: 5,
    textAlignVertical: 'center',
  },
});
export {styles};
