//This is the First page screen
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import CustomButton from "../components/CustomButton";


  export default function Intro({navigation})
  {
    return(
        <View style={styles.mainContainer}>
            
            <View style={styles.headerContainer}>
            <Text style={styles.txtheaderStyle}>Remote Antenna Control</Text>
            </View>

            <View style={styles.logoContainer}>
                <Image source={require('../resources/images/dish.jpeg')} style={styles.imgStyle}/>
                <Text style={styles.txtStyle}>
                    Welcome to our remote antenna control app;
                    Click the buttons below to start
                </Text>
            </View>

            <View style={styles.lowerContainer}>
            <TouchableOpacity 
            style={styles.opacity1Container}
            onPress={() => navigation.navigate('Welcome')}
            >
            <CustomButton title={'Welcome'}/>
            </TouchableOpacity>

           {/* <TouchableOpacity
             style={styles.opacity2Container}
             onPress={() => navigation.navigate('azam')}
             >
            <CustomButton title={'Azam TV'}/>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.opacity3Container}
             onPress={() => navigation.navigate('startimes')}
             >
            <CustomButton title={'Startimes'}/>
            </TouchableOpacity>
    */}

            </View>

        

        </View>
    );
  }

  const styles =  StyleSheet.create({
    mainContainer:{
        flex:1,
        width:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',

    },
    logoContainer:{
        width:'100%',
        height:'25%',
        position:'absolute',
        top:'20%',
        //backgroundColor:'red',
        padding:40,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    headerContainer:{
        width:'100%',
        height:'20%',
        position:'absolute',
        top:'0%',
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
    },
    imgStyle:{
        width:195,
         height:150,
    },
    txtStyle:{
        color:'black'
    },
    txtheaderStyle:{
        color:'black',
        fontSize: 40,
        textAlign:'center',
    },
    lowerContainer:{
        width:'100%',
        height:'70%',
        //backgroundColor:'yellow',
        position:'absolute',
        top:'45%',
        justifyContent:'center',
        //alignItems:'center',
    },
    opacity1Container:{
        width:'35%',
        height:'12%',
        position:'absolute',
        top:'30%',
        marginTop:'1%',
        //backgroundColor:'red',
        alignSelf:'center',
    },
    opacity2Container:{
        width:'35%',
        height:'12%',
        position:'absolute',
        top:'30%',
        marginTop:'1%',
        //backgroundColor:'red',
        alignSelf:'center',
    },
    opacity3Container:{
        width:'35%',
        height:'12%',
        position:'absolute',
        top:'50%',
        marginTop:'1%',
        //backgroundColor:'red',
        alignSelf:'center',
    }
  });