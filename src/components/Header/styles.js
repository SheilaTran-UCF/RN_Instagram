import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  middleBorder: {
    fontSize: 20,
  },
  message: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },
  mr15: {
    marginRight: 15,
  },
});
