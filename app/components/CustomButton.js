import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

  export default function CustomButton({title})
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
        backgroundColor:'#00a3e6',
        width:'100%',
        height:'100%',
        borderRadius:15,
        borderColor:'black',
        borderWidth:1,
        justifyContent:'center',
        alignSelf:'center',
    }

  });