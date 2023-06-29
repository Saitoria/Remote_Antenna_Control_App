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
  import LongCard from "../components/LongCard";
  import NewScheduleButton from "../components/NewScheduleBtn";

  const data = [
    {
      id: '1',
      title: 'LUKU',
    },
    {
      id: '2',
      title: 'Dawasco',
    },
    {
        id: '3',
        title: 'DSTV',
    },
];


  export default function Schedule()
  {

    const renderItem = ({item}) => (
        <TouchableOpacity 
        style={styles.opacity}
        >
        <LongCard title={item.title} />
        </TouchableOpacity>
    );

    return(
        <View style={styles.mainContainer}>

        <View style={styles.userContainer}>
            
            <Image source={require('../resources/images/user.png')} style={styles.userimgStyle}/>
            <Text style={styles.userTxt}>Good Morning {'\n'} Glory</Text>
            <Image source={require('../resources/icons/message.png')} style={styles.usericonStyle}/>
        </View>

        <View style={styles.headerContainer}>
            <Text style={styles.headerTxt}>List of all Schedules</Text>
        </View>

        <View style={styles.bodyContainer}>
        <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                style={styles.pinStyle}
            />
        </View>

        <View style={styles.footerContainer}>
            <TouchableOpacity
            style={styles.newScheduleBtn}
            >
            <NewScheduleButton/>
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
        //backgroundColor:'blue',
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
      opacity:{
        //backgroundColor:'green',
        marginVertical:'2%',
        marginHorizontal:'1%',
    },
    pinStyle:{
        flex:1,
        
    },
    footerContainer:{
        //backgroundColor:'cyan',
        width:'100%',
        height:'10%',
        position:'absolute',
        top:'80%',
        justifyContent:'center',
    },
    newScheduleBtn:{
        width:'40%',
        height:'80%',
        position:'absolute',
        right:'5%'
    }
  });