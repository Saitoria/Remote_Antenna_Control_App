import React,{useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
import CustomButton2 from "../components/CustomButton2";

  export default function Home()
  {
    const [angle, setAngle] = useState(null);
    const postAngleToAPI = () => {
      // code to post `angle` to the API
      const API_URL = "http://127.0.0.1:8000/api/dish-angles";
      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ angle }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the API
          console.log(data);
        })
        .catch((error) => {
          // Handle any error that occurred during the request
          console.error(error);
        });
    };
    return(
        <View style={styles.mainContainer}>

        <View style={styles.userContainer}>
            
            <Image source={require('../resources/images/dish2.png')} style={styles.userimgStyle}/>
            <Text style={styles.userTxt}>Hello! Let us fix your {'\n'} Antenna</Text>
            
        </View>

        <View style={styles.descContainer}>
          <Text style={{color:'black'}}>
          Take control of your signals, no matter how far.
           With our app, your antenna is just a tap away. 
           Whether you're lounging on the couch or on a mountain peak, keep your channels crystal clear.
            We promise, with our app, you'll have the best antenna experience since TV was invented.
             So say goodbye to snowy screens and hello to endless entertainment.
          </Text>
        </View>

        <View style={styles.bodyContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.contentHeader1}>To reset the DSTV antenna</Text>
                <Text style={styles.contentTxt}>Click below</Text>

                <TouchableOpacity
                            style={styles.opacity1Container}
                            onPress={() => postAngleToAPI()}
                            >
                <CustomButton2 title={'Reset'}/>
                </TouchableOpacity>

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
        paddingLeft:'10%',
    },
    descContainer:{
      flex:1,
      flexDirection:'row',
      width:'100%',
      height:'20%',
      position:'absolute',
      top:'15%',
      //backgroundColor:'red',
      alignItems:'center',
      paddingLeft:'10%',
      paddingRight:'10%',
      textAlign:'center',
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
      menuContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        height:'15%',
        //backgroundColor:'blue',
        position:'absolute',
        top:'12%',
        justifyContent:'space-evenly',
        alignItems:'center',
      },
      menuItemsContainer:{
        flexDirection:'row',
        backgroundColor:'black',
        width:'90%',
        height:'50%',
        borderRadius:30,
        alignSelf:'center',
        justifyContent:'space-evenly',
        alignItems:'center',
      },
      bodyContainer:{
        //backgroundColor:'orange',
        width:'100%',
        height:'60%',
        position:'absolute',
        top:'27%',
        justifyContent:'center',
      },
      contentContainer:{
            alignSelf:'center',
            //backgroundColor:'yellow',
            width:300,
            height:300,
            borderRadius:150,
            alignItems:'center',
            justifyContent:'center',
            borderColor:'#00a3e6',
            borderWidth:5,
            shadowColor:'#000000',
            shadowOffset:{
                width:10,
                height:10,
            },
            shadowRadius:7,
            shadowOpacity:1.0,

      },
      contentTxt:{
        color:'black',
        textAlign:'center',
      },
      contentHeader1:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
      },
      contentHeader2:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:'20%',
      },
  });
