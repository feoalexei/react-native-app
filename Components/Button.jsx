import React from "react";
import { Text, StyleSheet,TouchableOpacity } from "react-native";

const Btn = ({onPress, title}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn: {
        height: 51,
        width: '100%',
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
}); 

export default Btn;