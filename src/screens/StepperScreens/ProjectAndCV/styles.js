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
    marginBottom: 5,
  },
  pdf: {
    width: 130,
    height: 130,
    position: 'relative',
  },
  removePdf: {
    position: 'absolute',
    top: 0,
    right: 120,
  },
  documentName: {
    marginTop: 10,
    fontWeight: '600',
  },
});
export {styles};
