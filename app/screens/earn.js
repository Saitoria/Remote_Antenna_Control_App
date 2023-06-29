import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import EarnCard from "../components/EarnCard";
  import CustomButton3 from "../components/CustomButton3";

  export default function Earn()
  {
    return(
        <View style={styles.mainContainer}>

        <View style={styles.userContainer}>
            
            <Image source={require('../resources/images/user.png')} style={styles.userimgStyle}/>
            <Text style={styles.userTxt}>Good Morning {'\n'} Glory</Text>
            <Image source={require('../resources/icons/message.png')} style={styles.usericonStyle}/>
        </View>

        <View style={styles.headerContainer}>
            <Text style={styles.headerTxt}>Easy 4 Steps to Earn Scores</Text>
        </View>

        <View style={styles.bodyContainer}>
            <EarnCard 
            step={1} 
            title={'Share CRDB App'}
            description={'Share CRDB App with \n your Friends & Family'}
            />
            <EarnCard 
            step={2}
            title={'Install the App'}
            description={'Your Friends and \n Family install the App'}
            />
            <EarnCard
             step={3}
             title={'Make Deposit'}
             description={'Friends and Family \n  make Deposits'}
             />
            <EarnCard 
            step={4}
            title={'Earn Scores'}
            description={'You and your referral \n get bonus'}
            />
        </View>

        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => {
              alert('Your Referral Code is 2783. Please Share with Friends and Family Members to Earn Scores');
            }}

            style={styles.newScheduleBtn}
            >
            <CustomButton3 title={'Start Earning Now'}/>
            </TouchableOpacity>
        </View>


        </View>

);
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    userContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        height:'10%',
        position:'absolute',
        top:'2%',
        //backgroundColor:'red',
        alignItems:'center',
        paddingLeft:'2%',
    },
    userimgStyle:{
        width:70,
         height:70,
         borderRadius:35,
    },
    userTxt:{
        color:'black',
        marginLeft:'5%',
        fontSize:18,
    },
    usericonStyle:{
        width:30,
        height:30,
        position:'absolute',
        right:'10%',
        
      },
      headerContainer:{
        width:'100%',
        height:'10%',
        position:'absolute',
        top:'12%',
        justifyContent:'center',
        paddingLeft:'5%',
      },
      headerTxt:{
        color:'black',
        fontSize:22,
        fontWeight:'bold',
      },
      bodyContainer:{
        //backgroundColor:'orange',
        width:'100%',
        height:'58%',
        position:'absolute',
        top:'22%',
        justifyContent:'center',
      },
      footerContainer:{
        width:'100%',
        height:'10%',
        position:'absolute',
        top:'80%',
        justifyContent:'center',
    },
    newScheduleBtn:{
        width:'60%',
        height:'70%',
        alignSelf:'center',
    }
  });