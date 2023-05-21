import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { useRoute } from './router';

export default function App() {

  const routing = useRoute(true)

// Check whether fonts has been loaded
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

