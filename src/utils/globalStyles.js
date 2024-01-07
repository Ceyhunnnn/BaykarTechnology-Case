import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 0.5,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
  },
  centeredView: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtonArea: {
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerMenu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 5,
    borderRadius: 10,
    gap: 15,
    marginVertical: 8,
    borderBottomWidth: 0.3,
    borderBottomColor: '#4F4F4F',
  },
  logoAreaBaykar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  baykarLogo: {
    width: 200,
    height: 50,
  },
});
export default globalStyles;
