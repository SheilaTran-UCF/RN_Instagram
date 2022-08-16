import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {TextInput} from 'react-native';
import {styles} from './styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#000"
        placeholder="Search"
        style={styles.search}
      />
      <Icon style={styles.logo} name="search" color="#4F8EF7" />
    </View>
  );
};

export default Search;
