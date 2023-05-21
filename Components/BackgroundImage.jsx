import { StyleSheet, ImageBackground, Dimensions} from 'react-native';
import BgImg from '../assets/images/bg.png';

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground source={BgImg} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default BackgroundImage;