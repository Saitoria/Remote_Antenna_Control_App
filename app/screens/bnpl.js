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
  import LongCard2 from "../components/LongCard2";

  const data = [
    {
      id: '1',
      title: 'Karim M. Nyumba',
    },
    {
      id: '2',
      title: 'Patrick Mamsery',
    },
    {
        id: '3',
        title: 'Shedrack Siame',
    },
    {
        id: '4',
        title: 'Valence Florence',
    },
];


  export default function Scores()
  {

    const renderItem = ({item}) => (
        <TouchableOpacity 
        style={styles.opacity}
        >
        <LongCard2 title={item.title} />
        </TouchableOpacity>
    );




    return(
        <View style={styles.mainContainer}>

        <View style={styles.userContainer}>
            
            <Image source={require('../resources/images/user.png')} style={styles.userimgStyle}/>
            <Text style={styles.userTxt}>Good Morning {'\n'} Glory</Text>
            <Image source={require('../resources/icons/message.png')} style={styles.usericonStyle}/>
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
  });
