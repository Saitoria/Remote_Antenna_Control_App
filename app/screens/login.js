//This is the Login page screen
//Touchable opacity at pins to navigate to home
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
  import Card from "../components/Card";

  const data = [
    {
      id: '1',
      title: '1',
    },
    {
      id: '2',
      title: '2',
    },
    {
      id: '3',
      title: '3',
    },
    {
        id: '4',
        title: '4',
      },
      {
        id: '5',
        title: '5',
      },
      {
        id: '6',
        title: '6',
      },
      {
        id: '7',
        title: '7',
      },
      {
        id: '8',
        title: '8',
      },
      {
        id: '9',
        title: '9',
      },
      {
        id: '10',
        title: 'Forgot?',
      },
      {
        id: '11',
        title: '0',
      },
      {
        id: '12',
        title: 'Back',
      },
      
  ];

  const numColumns = 3;
  export default function Login({navigation})
  {
    const renderItem = ({item}) => (
        <TouchableOpacity 
        style={styles.opacity}
        onPress={() => navigation.navigate('TabNavigation')}
        >
        <Card title={item.title} />
        </TouchableOpacity>
    );

    return(
        <View style={styles.mainContainer}>

        <View style={styles.userContainer}>
            
            <Image source={require('../resources/images/user.png')} style={styles.userimgStyle}/>
            <Text style={styles.userTxt}>Good Morning {'\n'} Glory</Text>
            <Image source={require('../resources/icons/message.png')} style={styles.usericonStyle}/>
        </View>

        <View style={styles.simPinContainer}>
            <Text style={styles.pinTitleTxt}>Enter Simbanking PIN</Text>
            <View style={styles.pinContainer}>
                <View style={styles.pinCircle}></View>
                <View style={styles.pinCircle}></View>
                <View style={styles.pinCircle}></View>
                <View style={styles.pinCircle}></View>
            </View>
        </View>

        <View style={styles.pinEnterContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                style={styles.pinStyle}
                numColumns={numColumns}
            />
        </View>

        <View style={styles.bottomContainer}>
            <View style={styles.bottomIcon}>
            <Image source={require('../resources/icons/scanning.png')} style={styles.iconStyle}/>
            <Text style={styles.bottomTxt}>Scan to pay</Text>
            </View>

            <View style={styles.bottomIcon}>
            <Image source={require('../resources/icons/location.png')} style={styles.iconStyle}/>
            <Text style={styles.bottomTxt}>Location</Text>
            </View>

            <View style={styles.bottomIcon}>
            <Image source={require('../resources/icons/more.png')} style={styles.iconStyle}/>
            <Text style={styles.bottomTxt}>More</Text>
            </View>
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
    simPinContainer:{
        //backgroundColor:'green',
        width:'100%',
        height:'15%',
        position:'absolute',
        top:'12%',
        paddingTop:'5%',
    },
    pinContainer:{
        //backgroundColor:'yellow',
        flex:1,
        flexDirection:'row',
        width:'80%',
        alignSelf:'center',
        justifyContent:'center',
    },
    pinTitleTxt:{
        color:'black',
        marginLeft:'5%',
        fontSize:28,
        textAlign:'center',
        fontWeight:'bold',  
    },
    pinCircle:{
        backgroundColor:'lightgrey',
        width:30,
        height:30,
        borderRadius:15,
        marginHorizontal:'5%',
        alignSelf:'center',
    },
    pinEnterContainer:{
        //backgroundColor:'yellow',
        width:'100%',
        height:'55%',
        position:'absolute',
        top:'27%',
        justifyContent:'center',
        alignItems:'center',
        
    },
    pinStyle:{
        flex:1,
        
    },
    opacity:{
        //backgroundColor:'blue',
        marginVertical:'3%',
        marginHorizontal:'1%',
    },
    bottomContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        height:'20%',
        position:'absolute',
        top:'83%',
        //backgroundColor:'blue',
        alignItems:'center',
        paddingLeft:'2%', 
        justifyContent:'center',    
    },
    bottomIcon:{
      //justifyContent:'center',
      marginHorizontal:'1%',
      //backgroundColor:'yellow',
      width:'30%',
      height:'50%',

    },
    iconStyle:{
      width:40,
      height:40,
      alignSelf:'center',
      
    },
    bottomTxt:{
      color:'black',
      marginLeft:'5%',
      fontSize:18,
      textAlign:'center'
    },
    usericonStyle:{
      width:30,
      height:30,
      position:'absolute',
      right:'10%',
      
    },
});

