import React from "react";
import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import Btn from "../../Components/Button";
import { Ionicons } from '@expo/vector-icons'; 

const CreatePostsScreen = () => {

  const [state, setState] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.photoPlaceholder}>
        <TouchableOpacity style={{marginRight: 16}}>
          <FontAwesome5 name="camera" size={24} color="#BDBDBD" style={styles.cameraIcon}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.photoAction}>Upload photo</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
            placeholder='Name..' 
            value={state.name}
            onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, name: value }))
            }
        /> 
        <View style={styles.location}>
          <Ionicons name="location-outline" size={24} color="#BDBDBD" />             
           <TextInput 
            style={{...styles.input, borderBottomWidth: 0, flex: 1}} 
              placeholder='Location..' 
              value={state.location}
              onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, location: value }))
              }
          />       
        </View>                    
      </View> 
      <Btn title='Post'/>
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
  },
  photoPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 8,
    marginBottom: 8,
  },
  cameraIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    padding: 18,
    paddingTop: 16,
    borderRadius: 60,
  },
  photoAction: {
    color: '#BDBDBD',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 32,
  },
  form: {
    width: '100%',
    gap: 16,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    padding: 16,
  },
  location: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 16,
  }
});

export default CreatePostsScreen;

