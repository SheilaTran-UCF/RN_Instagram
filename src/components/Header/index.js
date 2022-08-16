import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.middleBorder}> | </Text>
      <Text style={styles.title}>Feed</Text>
      <View style={styles.message}>
        <Image
          style={[styles.logo, styles.mr15]}
          source={require('../../assets/tivi_logo.jpg')}
        />
        <Image style={styles.logo} source={require('../../assets/msg1.png')} />
      </View>
    </View>
  );
};

export default Header;
