import 'react-native-gesture-handler';
import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { useRoute } from './router';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config';

export default function App() {
  const [user, setUser] = useState(null)
  
  onAuthStateChanged(auth, (user) => {
    setUser(user)
  });
  
  const routing = useRoute(user)

// Check whether fonts has been loaded
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {routing}
      </NavigationContainer>
    </Provider>

  );
}

