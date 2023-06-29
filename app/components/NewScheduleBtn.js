import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

  export default function NewScheduleButton({title})
  {
    return(

        <View style={styles.btnContainer}>
            <Text style={styles.btnColor}>New Schedule</Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
    btnColor:{
        color:'black',
        textAlign:'center',
        fontSize:18,
    },
    btnContainer:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        borderRadius:15,
        borderColor:'lightgrey',
        borderWidth:3,
        justifyContent:'center',
        alignSelf:'center',
    }

  });