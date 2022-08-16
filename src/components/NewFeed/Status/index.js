import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export default function index({status, user}) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons style={styles.icon_Heart} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons
              style={styles.icon_Message}
              name="chatbubble-ellipses-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons style={styles.iconSave} name="share-social" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons style={styles.iconSave} name="bookmark" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>{status.reaction} Likes</Text>
        <Text style={styles.status}>
          <Text style={styles.user}>{user.name}</Text> {status.content}
        </Text>
        <Text style={styles.comments}>
          See all {status.comments.counts} comments
        </Text>
      </View>
    </View>
  );
}
