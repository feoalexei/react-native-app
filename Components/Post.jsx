import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

// icons 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const Post = ({post}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      {/* <Image style={styles.photo} source={require("../assets/images/forest.png")}/> */}
      <Image style={styles.photo} source={{uri: post.photo}}/>
      <Text style={styles.caption}>{post.name}</Text> 
      <View style={styles.details}>
        <View style={styles.stats}>
          <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
            <FontAwesome5 name="comment" size={24} color="#BDBDBD"/>
          </TouchableOpacity>
          <Text style={styles.counter}>0</Text> 
        </View>
        <View style={styles.stats}>
          <Feather name="thumbs-up" size={24} color="#FF6C00" />                
          <Text style={styles.counter}>0</Text> 
        </View>
        <View style={[styles.stats, styles.location]}>
          <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            <Ionicons name="location-outline" size={24} color="#BDBDBD" />             
          </TouchableOpacity>
          <Text style={[styles.counter, styles.underlined]}>{post.location}</Text> 
        </View>
      </View>
      {/* <Button title='got to Map' onPress={() => navigation.navigate('Map')}/> */}
      {/* <Button title='got ot Comments' onPress={() => navigation.navigate('Comments')}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    gap: 8,
  },
  caption: {
    fontSize: 16,
    fontWeight: 500,
    color: '#212121',
  },
  details: {
    flexDirection: 'row',
    gap: 24,
  },
  photo: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  stats: {
    flexDirection: 'row',
    gap: 6,
  },
  location: {
    marginLeft: 'auto',
  },
  counter: {
    fontSize: 16,
    color: '#212121'
  },
  underlined: {
    textDecorationLine: 'underline',
  }

}); 

export default Post;