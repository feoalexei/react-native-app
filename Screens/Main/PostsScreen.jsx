import React from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../NestedScreens/DefaultPostsScreen";
import CommentsScreen from "../NestedScreens/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen";

// icons import
import { MaterialIcons } from '@expo/vector-icons'; 

const NestedScreen = createStackNavigator();

const PostsScreen = () => {

  return (
    <NestedScreen.Navigator 
      screenOptions={() => ({
        headerTitleAlign: 'center',
        headerTintColor: '#212121',
        headerStyle: styles.headerBar,
    })}>
      <NestedScreen.Screen 
        name='DefaultScreen' 
        component={DefaultPostsScreen} 
        options={{
          title: 'Posts',
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 16}}>
                <MaterialIcons name="logout" size={24} color="#BDBDBD"  onPress={() => alert('This is a logout btn')}/>
            </TouchableOpacity>
          ),
        }} />
      <NestedScreen.Screen name='Comments' component={CommentsScreen} options={{tabBarStyle: { display: "none"}}} />
      <NestedScreen.Screen name='Map' component={MapScreen}/>
    </NestedScreen.Navigator>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
  },
});

export default PostsScreen;