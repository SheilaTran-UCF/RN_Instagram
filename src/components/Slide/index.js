import React from 'react';
import {styles} from './styles';

import {View, Image} from 'react-native';

export default function index({slide}) {
  return (
    <View style={styles.slide} key={slide}>
      <Image
        style={styles.image}
        source={{
          uri: slide,
        }}
      />
    </View>
  );
}
