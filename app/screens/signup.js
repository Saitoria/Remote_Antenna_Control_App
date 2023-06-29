//This is the SignUp screen -- put the checkboxes
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Dimensions
  } from 'react-native';
import CustomButton from "../components/CustomButton";
import CustomButton2 from "../components/CustomButton2";


const apihandler =()=>{
};


  export default function SignUp({navigation})
  {
    return(
        <ScrollView style={{flex:1,width:'100%',}}>
        <View style={styles.mainContainer}>
            
            <View style={styles.logoContainer}>
                <Image source={require('../resources/images/logo.png')} style={styles.imgStyle}/>
            </View>

            <View style={styles.lowerContainer}>

            <View style={styles.formContainer}>
            <Text style={{color:'black',fontSize:16,textAlign:'center'}}>Did Someone Recommend CRDB App to you?</Text>
            <View>
            <Text style={{color:'black',fontSize:16, textAlign:'center'}}>Yes.....No</Text>
            <TextInput 
            keyboardType='numeric'
            maxLength={4}
            placeholder="Enter Refferal ID:"
            placeholderTextColor={'black'}
            style={styles.txtInput}
            />
            <Text style={{color:'black',fontSize:24, textAlign:'center',marginTop:'3%'}}>Personal Details</Text>
            <TextInput 
            placeholder="Name:"
            placeholderTextColor={'black'}
            style={styles.txtInput}
            />
            <TextInput 
            placeholder="Account Type:"
            placeholderTextColor={'black'}
            style={styles.txtInput}
            />
            <TextInput 
            placeholder="Nida No:"

            keyboardType='numeric'
            maxLength={20}
            placeholderTextColor={'black'}
            style={styles.txtInput}
            />
            <TextInput 
            keyboardType='numeric'
            placeholder="Phone Number:"
            placeholderTextColor={'black'}
            style={styles.txtInput}
            maxLength={10}
            />
            </View>
            </View>

            
        
            <View style={styles.submitContainer}>

            {/*<TouchableOpacity style={styles.opacity1Container}/> */}

            <TouchableOpacity style={styles.opacity1Container}>

            <CustomButton title={'Create Account'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opacity2Container}>
            <CustomButton2 title={'Cancel'}/>
            </TouchableOpacity>
            </View>


            </View>
            
        </View>
        </ScrollView>
        
    )
  }

  const styles =  StyleSheet.create({
    mainContainer:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',

    },
    logoContainer:{
        width:'100%',
        height:'30%',
        position:'absolute',
        top:'2%',
        //backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
    },
    imgStyle:{
        width:'70%',
         height:'70%',
    },
    lowerContainer:{
        width:'100%',
        height:'70%',
        //backgroundColor:'yellow',
        position:'absolute',
        top:'32%',
        justifyContent:'center',
        //alignItems:'center',
    },
    formContainer:{
        width:'100%',
        height:'80%',
        //backgroundColor:'red',
        alignContent:'center',
    },
    submitContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',

        width:'100%',
        //position:'absolute',
        //top:'90%',

        
        width:'100%',

    },
    opacity1Container:{
        width:'30%',
        height:'50%',
        //marginLeft:'5%',
        //backgroundColor:'yellow',
        marginBottom:'5%',
        alignSelf:'center',
    },
    opacity2Container:{
        width:'30%',
        height:'50%',
        marginLeft:'15%',
        //backgroundColor:'red',
        marginBottom:'5%',
        alignSelf:'center',
    },
    txtInput:{

        color: 'black',
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:'80%',
        height:'15%',

        borderBottomColor:'black',
        borderBottomWidth:1,
        width:'80%',
        height:'20%',
        //textAlign:'center',
        alignSelf:'center',
    }
  });
