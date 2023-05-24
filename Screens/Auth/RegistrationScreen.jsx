import { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Btn from '../../Components/Button';
import { useDispatch } from 'react-redux';

import { authSignUp } from "../../redux/auth/authOperations";

const initialState = {
  login: '',
  email: '',
  password: '',
};

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [state, setState] = useState(initialState);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordisible] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState({
    login: false,
    email: false,
    password: false,
  });

  const dispatch = useDispatch();

  // handle form submit
  const handleSubmit = () => {
    dispatch(authSignUp(state))
    setState(initialState);
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
            {/* <View style={{...styles.signWindow, marginBottom: isKeyboardVisible ? -164 : 0}}> */}
            <View style={{...styles.signWindow}}>
              <View style={styles.avatar}>
                <TouchableOpacity style={styles.btnUpload}>
                  <AntDesignIcon name="plus" size={20} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Sign Up</Text>
              <View style={styles.form}>
                <TextInput 
                  style={{
                    ...styles.input, 
                    borderColor: isFocusedInput.login ? '#FF6C00' : '#E8E8E8', 
                    backgroundColor: isFocusedInput.login ? '#FFF' : '#F6F6F6' }} 
                  placeholder='Login' 
                  onFocus={() => {setIsKeyboardVisible(true), handleInputFocus('login')}}
                  onBlur={() => handleInputBlur('login')}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  />
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
                <Btn title="Register" onPress={handleSubmit}/>
              </View>
              <TouchableOpacity
                activeOpacity={0.6} 
                onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.navLink}>Already have an account? Sign In</Text>
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
    height: 549,
    borderTopLeftRadius: 25,  
    borderTopRightRadius: 25,  
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
    borderColor: '#FF6C00', 
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
  alternateSignIn: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  navLink: {
    textAlign: 'center',
    color: '#1B4371',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  }
});

export default RegisterScreen;
