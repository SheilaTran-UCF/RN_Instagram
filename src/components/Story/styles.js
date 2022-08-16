import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  item: {
    paddingRight: 10,
    position: 'relative',
  },
  backgroundImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF0037',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 20,
    bottom: 25,
    right: 15,
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 1,
  },
  name: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 13,
  },
  add: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0037',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
});
