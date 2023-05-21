import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import BackgroundImage from "../../Components/BackgroundImage";
import Post from "../../Components/Post";

// icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.profileWrapper}>
          <View style={styles.avatar}>
            <Image source={require("../../assets/images/avatar.png")}></Image>
            <TouchableOpacity style={styles.btnUpload}>
              <AntDesign name="close" size={15} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logoutBtn}>
            <MaterialIcons name="logout" size={24} color="#BDBDBD"  onPress={() => alert('This is a logout btn')}/>
          </TouchableOpacity>
          <Text style={styles.name}>Natali Romanova</Text>
          <ScrollView>
            <View style={styles.posts}> 
              <Post/>
              <Post/>
              <Post/>
            </View>
          </ScrollView>
        </View>
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileWrapper: {
    paddingHorizontal: 16,
    width: '100%',
    height: '85%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
  },
  avatar: {
    position: 'relative',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: -60,
  },
  btnUpload: {
    position: 'absolute',
    bottom: 14,
    right: -12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#FFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E8E8E8', 
  },
  logoutBtn: {
    position: 'absolute',
    top: 22,
    right: 16,

  },
  name: {
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 32,
  },
  posts: {
    gap: 32,
  },
});

export default ProfileScreen;
