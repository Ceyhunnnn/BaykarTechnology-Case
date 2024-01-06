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

  projectArea: {
    marginHorizontal: 20,
  },
  ProjectPosition: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    borderRadius: 10,
    padding: 5,
    borderWidth: 0.2,
    marginBottom: 10,
  },
  dynamicArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  eventArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
export {styles};
