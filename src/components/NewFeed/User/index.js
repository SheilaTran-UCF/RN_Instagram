import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function index({user, navigation}) {
  const _onClickUser = () => {
    navigation.navigate('Profile', {userParams: user});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.info} onPress={_onClickUser}>
        <Image
          style={styles.avt}
          source={{
            uri: user.avatar,
          }}
        />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.address}>{user.city}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.right}>
        <Text>{user.date}</Text>
        <Ionicons style={styles.dotImage} name="ellipsis-vertical-outline" />
      </View>
    </View>
  );
}
