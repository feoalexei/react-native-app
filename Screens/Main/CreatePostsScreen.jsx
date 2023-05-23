import React from "react";
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

// icons import
import { FontAwesome5 } from '@expo/vector-icons'; 
import Btn from "../../Components/Button";
import { Ionicons } from '@expo/vector-icons'; 

const initialState = {
  photo: null,
  name: '',
  location: '',
  coordinate: null,
};

const CreatePostsScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [postData, setPostData] = useState(initialState);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(cameraPermission.status === "granted");

      const locationPermission = await Location.requestForegroundPermissionsAsync();
      if (locationPermission.status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhotoUri(uri);
      setPostData(prevState => ({ ...prevState, photo: uri, coordinate: coords }));
      await MediaLibrary.createAssetAsync(uri);
    };

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
  };

  const sendPhoto = async () => {
    navigation.navigate('DefaultScreen', postData)
  };

  console.log(postData);

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} ref={setCameraRef}>
         {photoUri && <View style={styles.photoContainer}>
          <Image source={{uri: photoUri}} style={{width: '100%', height: 240}}/>
        </View>}
          <TouchableOpacity style={styles.takePhotoBtn} onPress={takePhoto}>
            <FontAwesome5 
              name="camera" 
              size={24} 
              style={{
                ...styles.cameraIcon, 
                backgroundColor: photoUri ? 'rgba(255, 255, 255, 0.3)' :'#fff',
                color: photoUri ? '#fff' : '#BDBDBD'}}/>
          </TouchableOpacity>
        </Camera> 
      </View>
      {photoUri ? (
        <Text style={styles.photoAction}>Edit photo</Text>
        ) : (
          <Text style={styles.photoAction}>Upload photo</Text>
          )
      }
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
            placeholder='Name..' 
            value={postData.name}
            onChangeText={(value) =>
            setPostData((prevState) => ({ ...prevState, name: value }))
            }
        /> 
        <View style={styles.location}>
          <Ionicons name="location-outline" size={24} color="#BDBDBD" />             
          <TextInput 
            style={{...styles.input, borderBottomWidth: 0, flex: 1, marginLeft: 4}} 
              placeholder='Location..' 
              value={postData.location}
              onChangeText={(value) =>
              setPostData((prevState) => ({ ...prevState, location: value }))
              }
          />       
        </View>  
        <Btn title='Post'onPress={sendPhoto}/>                   
      </View> 
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  cameraContainer: {
    height: 240,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  photoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  takePhotoBtn: {
    zIndex: 1,
    position: 'absolute',
  },
  cameraIcon: {
    width: 60,
    height: 60,
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

