import React from "react";
import {View,Image,Text,StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import { imgUrl } from "../globals/global";

export default function LongCard2({title})
{
    return(
        <View style={styles.item}>

        <View style={styles.itemBody}>
        <Text style={styles.itemHeader}>{title}</Text>
        <Text style={styles.itemText}>Registered on: 08-Sep-22</Text>
        </View>

        <View style={styles.itemFooter}>
        <Text style={styles.itemText}>0156728252828</Text>
        </View>

    </View>
    )
};

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        width:'90%',
        height:70,
        marginVertical:'5%',
        marginHorizontal:'4%',
        borderBottomWidth:1,
        justifyContent:'space-evenly',
        alignContent:'center',
        alignSelf:'center',
    },
    itemText:{
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        color:'black',
        fontSize:14,
    },
    itemImg:{
        width:30,
        height:30,
        alignSelf:'center',
    },
    itemBody:{
        flexDirection:'column',
        justifyContent:'center',
    },
    itemFooter:{
        flexDirection:'column',
        justifyContent:'center',
    },
    itemHeader:{
        width:'100%',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        color:'green',
        fontSize:20,   
        fontWeight:'bold',
        position:'relative',
        
        },
        itemImg2:{
            width:25,
            height:25,
            alignSelf:'center',
        },

});