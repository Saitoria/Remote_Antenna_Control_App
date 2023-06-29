import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from 'react-native';
  import LongCard from "../components/LongCard";
  import NewScheduleButton from "../components/NewScheduleBtn";
  import CustomButton from "../components/CustomButton";
  import CustomButton2 from "../components/CustomButton2";


  export default function NewSchedule({navigation})
  {
    return(
      <ScrollView style={{flex:1,width:'100%',}}>
        <View style={styles.mainContainer}>

        <View style={styles.userContainer}>
            
            <Image source={require('../resources/images/user.png')} style={styles.userimgStyle}/>
            <Text style={styles.userTxt}>Good Morning {'\n'} Glory</Text>
            <Image source={require('../resources/icons/message.png')} style={styles.usericonStyle}/>
        </View>

        <View style={styles.headerContainer}>
            <Text style={styles.headerTxt}>Create new Schedule</Text>
        </View>

        <View style={styles.bodyContainer}>

        <TextInput 
            placeholder="Enter service"
            //keyboardType='numeric'
            maxLength={20}
            placeholderTextColor={'black'}
            style={styles.txtInput}
            />

        <TextInput 
            placeholder="Description"
            //keyboardType='numeric'
            maxLength={20}
            placeholderTextColor={'black'}
            style={styles.txtInput}
            />

        <TextInput 
            placeholder="Enter amount"
            keyboardType='numeric'
            maxLength={20}
            placeholderTextColor={'black'}
            style={styles.txtInput}
            />

        <Text style={styles.intervalTxt}>Choose Interval</Text>

        <View style={styles.dateContainer}>

          <View style={styles.datesubContainer}>
              <Text style={styles.dayTxt}>Day</Text>
              <TextInput
            placeholder="00"
            keyboardType='numeric'
            style={styles.txtInput2}
            placeholderTextColor={'black'}
            maxLength={2}
              />
          </View>

          <View style={styles.datesubContainer}>
              <Text style={styles.dayTxt}>Month</Text>
              <TextInput
            placeholder="00"
            keyboardType='numeric'
            style={styles.txtInput2}
            maxLength={2}
            placeholderTextColor={'black'}
              />
          </View>

          <View style={styles.datesubContainer}>
              <Text style={styles.dayTxt}>Year</Text>
              <TextInput
            placeholder="00"
            keyboardType='numeric'
            style={styles.txtInput2}
            maxLength={4}
            placeholderTextColor={'black'}
              />
          </View>
        </View>

        </View>


        <View style={styles.footerContainer}>
            <TouchableOpacity
            style={styles.newScheduleBtn1}
            >
            <CustomButton title={'create'}/>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.newScheduleBtn2}
            >
            <CustomButton2 title={'cancel'}/>
            </TouchableOpacity>
        </View>

        </View>
        </ScrollView>
        

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
        height:'52%',
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
        flexDirection:'row',
        width:'100%',
        height:'10%',
        position:'absolute',
        top:'74%',
        justifyContent:'center',
    },

    txtInput:{
      color: 'black',
      borderBottomColor:'black',
      borderWidth:1,
      width:'80%',
      height:'12%',
      alignSelf:'center',
      borderRadius:10,
      marginTop:'10%',
  },
  intervalTxt:{
    color:'black',
    fontSize:18,
    width:'100%',
    paddingLeft:'15%',
    marginTop:'2%',
  },
  dateContainer:{
    flexDirection:'row',
    width:'100%',
    //backgroundColor:'red',
    height:'30%',

  },
  datesubContainer:{
    flexDirection:'column',
    width:'20%',
    height:'100%',
    marginHorizontal:'5%',
    paddingTop:'3%',
    //backgroundColor:'blue',
  },
  dayTxt:{
    color:'black',
  },
  txtInput2:{
    color: 'black',
    borderBottomColor:'black',
    borderWidth:1,
    width:'80%',
    height:'40%',
    borderRadius:10,
},
newScheduleBtn1:{
  width:'30%',
  height:'60%',
  position:'absolute',
  right:'40%'
},
newScheduleBtn2:{
  width:'30%',
  height:'60%',
  position:'absolute',
  right:'5%'
},
  });