import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    flexDirection: 'row',
  },
  icon_Heart: {
    fontSize: 20,
    color: 'red',
  },
  icon_Message: {
    fontSize: 20,
    marginHorizontal: 15,
  },
  icon_Find: {
    fontSize: 25,
  },
  iconSave: {
    fontSize: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    color: 'red',
    fontSize: 12,
  },
  status: {fontSize: 12, marginTop: 10},
  comments: {
    fontSize: 12,
    paddingTop: 5,
    color: 'grey',
  },
  user: {
    fontWeight: 'bold',
  },
});
