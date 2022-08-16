import React from 'react';
import {View, Image, Text, Slider} from 'react-native';
import {styles} from './styles';
import Swiper from 'react-native-swiper';
import Slide from '../../Slide';

export default function index({pictures}) {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        height={250}
        dot={<View style={styles.dots} />}
        activeDot={<View style={styles.Dot} />}
        paginationStyle={styles.paginationStyle}
        loop>
        {pictures.map((slide) => {
          return <Slide slide={slide} key={slide} />;
        })}
      </Swiper>
    </View>
  );
}
