import { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function RegisterScreen() {

  const [state, setState] = useState(initialState);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordisible] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState({
    login: false,
    email: false,
    password: false,
  });

  // handle form submit
  const handleSubmit = () => {
    console.log(state);
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
        <ImageBackground source={require("../assets/images/bg.png")} style={styles.imageBg}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
            <View style={{...styles.signWindow, marginBottom: isKeyboardVisible ? -164 : 0}}>
              <View style={styles.avatar}>
                {/* <Image source={require("../assets/images/avatar.png")}></Image> */}
                <TouchableOpacity style={styles.btnUpload}>
                  <Icon name="plus" size={20} color="#FF6C00" />
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
                <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.alternateSignIn}>Already have an account? Sign In</Text>
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
  btn: {
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginTop: 27,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  alternateSignIn: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  }
});
