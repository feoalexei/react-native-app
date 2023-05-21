import React from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, Image } from "react-native";
import Post from "../../Components/Post";

const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.authorInfo}>
          <Image style={styles.avatar} source={require("../../assets/images/avatar.png")}/>
          <View>
            <Text style={styles.name}>Natalia Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
        <View style={styles.posts}> 
          <Post/>
          <Post/>
          <Post/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  scrollView: {
    width: '100%',
  },
  authorInfo: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  name : {
    fontWeight: 700,
    fontSize: 13, 
  },
  email : {
    fontSize: 11, 
  },
  posts: {
    width: '100%',
    gap: 32,
  },
}); 

export default PostsScreen;