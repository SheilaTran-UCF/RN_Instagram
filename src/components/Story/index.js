import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const DATA = [
  {
    id: '1',
    name: 'Kenneth',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUK1LaBaummJfuW6GIM_kt3R9egIlpqVpEKw&usqp=CAU',
  },
  {
    id: '2',
    name: 'Sonny',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',

    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6A2uPoIft1gvtqS4DBeyqqAE7cR84ViUgCw&usqp=CAU',
  },
  {
    id: '3',
    name: 'Kha',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',

    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjradKIOHsSEiNr4-fFFd5nV-OggxvXcuvQ&usqp=CAU',
  },
  {
    id: '4',
    name: 'Hello',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',

    image:
      'https://i2.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/10/Cute-Girl-Dp-Images-Pictures-47.jpg?resize=451%2C631&ssl=1',
  },
];

const Story = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        ListHeaderComponent={
          <TouchableOpacity style={styles.item}>
            <View style={styles.add}>
              <Text style={styles.text}>+</Text>
            </View>
            <Text style={styles.name}>Add</Text>
          </TouchableOpacity>
        }
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.backgroundImage}>
              <Image style={styles.logo} source={{uri: item.image}} />
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Image style={styles.avatar} source={{uri: item.avatar}} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Story;
