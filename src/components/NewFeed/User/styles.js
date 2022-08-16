import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  info: {
    flexDirection: 'row',
  },
  avt: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 15,
  },
  address: {
    fontSize: 12,
    color: 'red',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotImage: {
    fontSize: 20,
  },
});
