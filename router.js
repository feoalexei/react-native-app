import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator(); 
const MainTab = createBottomTabNavigator();

import RegisterScreen from './Screens/Auth/RegistrationScreen';
import LoginScreen from './Screens/Auth/LoginScreen';
import PostsScreen from './Screens/Main/PostsScreen';
import CreatePostsScreen from './Screens/Main/CreatePostsScreen';
import ProfileScreen from './Screens/Main/ProfileScreen';
import Home from './Screens/Home';

// icons import
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export const useRoute = (isAuth) => {
    if (!isAuth) {
      return ( 
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen name="Registration" component={RegisterScreen} options={{ headerShown: false }}/>
          <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <AuthStack.Screen name="Home" component={PostsScreen} options={{ headerShown: false }}/>
        </AuthStack.Navigator>
      );
    }
    return (
      <MainTab.Navigator screenOptions={({route}) => ({
        initialRouteName: 'Posts',
        headerTitleAlign: 'center',
        headerTintColor: '#212121',
        headerStyle: styles.headerBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF6C00',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Posts') {
            return <AntDesign name="appstore-o" size={size} color={color} />;
          } else if (route.name === 'Create') {
            return <AntDesign name="plus" size={size} color='#fff' style={styles.addPostBtn}/>
          } else if (route.name === 'Profile') {
            return  <Feather name="user" size={size} color={color} />;
          }
        },
      })}>
          <MainTab.Screen 
            name="Posts" 
            component={PostsScreen}
            options={{
              title: 'My Posts',
              headerRight: () => (
                <TouchableOpacity style={{marginRight: 16}}>
                    <MaterialIcons name="logout" size={24} color="#BDBDBD"  onPress={() => alert('This is a logout btn')}/>
                </TouchableOpacity>
              ),
            }} 
          />
          <MainTab.Screen 
            name="Create" 
            component={CreatePostsScreen} 
            options={{
                title: 'Create a post',
            }}
          />
          <MainTab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
                headerShown: false,
            }} 
          />
        </MainTab.Navigator>
    );
  }
  
  const styles = StyleSheet.create({
    headerBar: {
      borderBottomWidth: 1,
      borderBottomColor: '#BDBDBD',
    },
    addPostBtn: {
      textAlign: 'center',
      paddingVertical: 8,
      width: 70,
      height: 40,
      backgroundColor: '#FF6C00',
      borderRadius: 40,
    },
  });

  
  