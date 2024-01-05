import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cvArea: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5,
  },
  cvContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderStyle: 'dashed',
    borderRadius: 30,
    borderColor: 'gray',
    height: 130,
    width: 130,
  },
});
export {styles};
