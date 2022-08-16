import React from 'react';
import {View, Text} from 'react-native';

const Profile = ({route}) => {
  alert(JSON.stringify(route.params.userParams));
  return (
    <View>
      <Text>profile</Text>
    </View>
  );
};

export default Profile;
