import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import User from './User';
import Pictures from './Pictures';
import Status from './Status';
import {newfeeds} from './sampleData';

export default function index({navigation}) {
  return (
    <>
      {newfeeds.map((newfeed) => {
        return (
          <View style={styles.container} key={newfeed.id}>
            <User user={newfeed.user} navigation={navigation} />
            <Pictures pictures={newfeed.images} />
            <Status status={newfeed.status} user={newfeed.user} />
          </View>
        );
      })}
    </>
  );
}
