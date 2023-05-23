import React, {useEffect} from "react";
import { View, ScrollView, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

// import icons 
import { AntDesign } from '@expo/vector-icons'; 

const CommentsScreen = ({navigation}) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={require("../../assets/images/forest.png")}/>    
      <ScrollView style={styles.comments}>
        <View style={styles.comments}>
          <View style={styles.commentContainer}>
            <Image style={styles.avatar} source={require("../../assets/images/avatar.png")}></Image>
            <View style={styles.comment}>
              <Text style={styles.commentText}>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
              <Text style={styles.commentDate}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
          <View style={[styles.commentContainer, styles.commentReverse]}>
            <Image style={styles.avatar} source={require("../../assets/images/avatar.png")}></Image>
            <View style={styles.comment}>
              <Text style={styles.commentText}>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
              <Text style={styles.commentDate}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
          <View style={styles.commentContainer}>
            <Image style={styles.avatar} source={require("../../assets/images/avatar.png")}></Image>
            <View style={styles.comment}>
              <Text style={styles.commentText}>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
              <Text style={styles.commentDate}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
          <View style={[styles.commentContainer, styles.commentReverse]}>
            <Image style={styles.avatar} source={require("../../assets/images/avatar.png")}></Image>
            <View style={styles.comment}>
              <Text style={styles.commentText}>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
              <Text style={styles.commentDate}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder='Write a comment...' 
        />
        <TouchableOpacity style={styles.addCommentBtn}>
          <AntDesign name="arrowup" size={20} color="#fff" onPress={() => alert('A comment was submitted')} />
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  photo: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  comments: {
    width: '100%',
    gap: 24,
  },
  commentContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  commentReverse: {
    flexDirection: 'row-reverse',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
  comment: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  commentText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#212121',
    marginBottom: 8,
  },
  commentDate: {
    fontSize: 10,
    lineHeight: 12,
    color: '#BDBDBD',
    textAlign: 'right',
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  input: {
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 50,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    padding: 16,
    marginTop: 32,
  },
  addCommentBtn: {
    position: 'absolute',
    top: 40,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    borderRadius: 34,
  },
});

export default CommentsScreen;