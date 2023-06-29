import React from "react";
import {View,Image,Text,StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import { imgUrl } from "../globals/global";

export default function EarnCard({step,title,description})
{
    return(
        <View style={styles.item}>
        
        <View style={styles.stepNumber}>
            <Text style={{color:'white',fontSize:30,textAlign:'center'}}>{step}</Text>
        </View>

        <View style={styles.itemBody}>
        <Text style={styles.itemHeader}>{title}</Text>
        <Text style={styles.itemText}>{description}</Text>
        </View>


    </View>
    )
};

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        width:'90%',
        height:80,
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
        position:'relative',
        right:'50%',
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
        fontSize:22,   
        fontWeight:'bold',
        position:'relative',
        
        },
        itemImg2:{
            width:25,
            height:25,
            alignSelf:'center',
        },
        stepNumber:{
            backgroundColor:'black',
            width:46,
            height:46,
            borderRadius:23,
            alignSelf:'center',
            justifyContent:'center',
            position:'relative',
            right:'20%',
        }

});