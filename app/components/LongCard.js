import React from "react";
import {View,Image,Text,StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import { imgUrl } from "../globals/global";

export default function LongCard({title})
{
    return(
        <View style={styles.item}>
        <Image source={require('../resources/icons/clipboard.png')} style={styles.itemImg}/>

        <View style={styles.itemBody}>
        <Text style={styles.itemHeader}>{title}</Text>
        <Text style={styles.itemText}>Next Payment: 24/06/2022</Text>
        </View>

        <View style={styles.itemFooter}>
        <Text style={styles.itemText}>10,000 TZS</Text>
        <Image source={require('../resources/icons/pen.png')} style={styles.itemImg2}/>
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
        backgroundColor:'lightgrey',
        borderRadius: 25,
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
        fontSize:16,
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
        color:'black',
        fontSize:24,   
        fontWeight:'bold',
        position:'relative',
        
        },
        itemImg2:{
            width:25,
            height:25,
            alignSelf:'center',
        },

});