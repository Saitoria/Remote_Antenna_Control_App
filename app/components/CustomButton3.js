import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

  export default function CustomButton3({title})
  {
    return(

        <View style={styles.btnContainer}>
            <Text style={styles.btnColor}>{title}</Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
    btnColor:{
        color:'white',
        textAlign:'center',
        fontSize:18,
    },
    btnContainer:{
        backgroundColor:'#3AAF4A',
        width:'100%',
        height:'100%',
        borderRadius:20,
        justifyContent:'center',
        alignSelf:'center',
    }

  });