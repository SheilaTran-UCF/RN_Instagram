import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Search from '../../components/Search';
import Story from '../../components/Story';
import NewFeed from '../../components/NewFeed';
import {styles} from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
        <Header />
        <Search />
        <Story />
        <NewFeed navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;
