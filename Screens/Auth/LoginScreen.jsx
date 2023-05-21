import { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../../Components/BackgroundImage';
import Btn from '../../Components/Button';

const initialState = {
  email: '',
  password: '',
};

const LoginScreen = () => { 

  const navigation = useNavigation();

  const [state, setState] = useState(initialState)
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordisible] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState({
    email: false,
    password: false,
  });

  // handle form submit
  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
    navigation.navigate("Home");
  }

  // handlers to change isFocused on textInput
  const handleInputFocus = textInput => {
    setIsFocusedInput(prevState => ({...prevState, [textInput]: true}))
  }

  const handleInputBlur = textInput => {
    setIsFocusedInput(prevState => ({...prevState, [textInput]: false}))
  }

  // useEffect to detect whether the keyboard is open
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true); 
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false); 
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const hideKeyboard = () => {
    setIsKeyboardVisible(false);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ImageBackground source={require('../../assets/images/bg.png')} style={styles.imageBg}>     
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
            <View style={styles.signWindow}>
            {/* <View style={{...styles.signWindow, marginBottom: isKeyboardVisible ? -230 : 0}}> */}
              <Text style={styles.title}>Sign In</Text>
              <View style={styles.form}>
                <TextInput 
                  style={{
                    ...styles.input, 
                    borderColor: isFocusedInput.email ? '#FF6C00' : '#E8E8E8', 
                    backgroundColor: isFocusedInput.email ? '#FFF' : '#F6F6F6' }} 
                  placeholder='Email address' 
                  onFocus={() => {setIsKeyboardVisible(true), handleInputFocus('email')}}
                  onBlur={() => handleInputBlur('email')}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  />
                <View style={styles.passwordField}>
                  <TextInput 
                    style={{
                      ...styles.input, 
                      borderColor: isFocusedInput.password ? '#FF6C00' : '#E8E8E8', 
                      backgroundColor: isFocusedInput.password ? '#FFF' : '#F6F6F6' }} 
                    placeholder='Password' 
                    secureTextEntry = {!isPasswordVisible}
                    onFocus={() => {setIsKeyboardVisible(true), handleInputFocus('password')}}
                    onBlur={() => handleInputBlur('password')}
                    value={state.password}
                    onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  />
                  {isPasswordVisible ? (
                    <Text style={styles.passwordVisibility} onPress={() => setIsPasswordisible(prev => !prev)}>Hide</Text>
                      ) : (<Text style={styles.passwordVisibility} onPress={() => setIsPasswordisible(prev => !prev)}>Show</Text>
                  )}
                </View> 
                <Btn title='Sign In' onPress={handleSubmit}/>
              </View>
              <TouchableOpacity 
                activeOpacity={0.6}
                onPress={() => navigation.navigate("Registration")}>
                    <Text style={styles.navLink}>Don't have an account? Sign Up</Text>
              </TouchableOpacity>
            </View> 
          </KeyboardAvoidingView>   
        </ImageBackground>        
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  signWindow: {
    backgroundColor: '#fff',
    width: '100%',
    height: 489,
    borderTopLeftRadius: 25,  
    borderTopRightRadius: 25,  
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 500,
    fontFamily: 'Roboto-Medium',
    marginTop: 32,
  },
  form: {
    gap: 16,
    marginTop: 33,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    padding: 16,
  },
  passwordField: {
    position: 'relative',
  },
  passwordVisibility: {
    position: 'absolute',
    bottom: 15,
    right: 16,
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  navLink: {
    textAlign: 'center',
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  }
});

export default LoginScreen;