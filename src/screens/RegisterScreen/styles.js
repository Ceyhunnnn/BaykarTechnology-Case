import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  stepperArea: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeTextArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingVertical: 10,
    marginBottom: 10,
  },
  activeTextDecoration: {
    marginTop: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    borderColor: 'gray',
  },
  hidden: {
    display: 'none',
  },
  actionButtonArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  currentCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
export {styles};
