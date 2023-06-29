import React from "react";
import {View,Image,Text,StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import { imgUrl } from "../globals/global";

export default function Card({title})
{
    return(
        <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    item:{
        width:80,
        height:80,
        marginVertical:'5%',
        marginHorizontal:'4%',
        backgroundColor:'lightgrey',
        borderRadius: 40,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
    },
    itemText:{
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        color:'black',
        fontSize:20,
    },

});