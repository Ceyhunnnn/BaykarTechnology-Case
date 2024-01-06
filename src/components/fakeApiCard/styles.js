import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 12,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    color: '#4f4f4f',
    marginBottom: 4,
  },
  email: {
    marginBottom: 4,
  },
  address: {
    marginBottom: 4,
  },
  phone: {
    marginBottom: 4,
  },
  website: {
    color: 'blue',
    marginBottom: 4,
  },
  company: {
    marginTop: 4,
  },
});
export {styles};
