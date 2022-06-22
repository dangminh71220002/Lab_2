import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
import React, { useState } from "react";
import { Icon } from 'react-native-elements'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonHeader}>
          <Icon 
          name='chevron-left'
          size={30}
          />
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <Text style={styles.contentHeader}>
            Sleep Timer
          </Text>
        </View>
      </View>
      <View style={styles.midBody}>
        <TouchableOpacity style={styles.distanceButton} onPress={()=>alert("1h")}> 
          <Text style={{fontSize:30}}>1h</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.distanceButton} onPress={()=>alert("2h")}> 
          <Text style={{fontSize:30}}>2h</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.distanceButton} onPress={()=>alert("3h")}> 
          <Text style={{fontSize:30}}>3h</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.distanceButton} onPress={()=>alert("4h")}> 
          <Text style={{fontSize:30}}>4h</Text>  
        </TouchableOpacity>
        <View style={styles.countdown}>
          <Text style={{fontSize:25}}>00:00</Text>
        </View>
        <TouchableOpacity  style={styles.set}>
          <View> 
              <Text style={{fontSize:20}}>
                SET
              </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 10,
    backgroundColor:'#7DD0F6',
    color:"blue",
    // alignItems: 'center',
  },
  midBody:{
    flex:90,
    // backgroundColor:'red',
    alignItems: 'center',
   // justifyContent: 'center',
  },
  distanceButton:{
    width:'80%',
    height:'8%',
    backgroundColor:'#7DD0F6',
    marginTop:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20
  },
  contentHeader:{
    fontSize:25,
    marginTop:'-12%',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  countdown:{
    backgroundColor:'#7DD0F6',
    width:'30%',
    height:'10%',
    marginTop:'10%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  set:{
    backgroundColor:'#7DD0F6',
    width:'50%',
    height:'10%',
    marginTop:'10%',
    justifyContent:'center',
    alignItems:'center',
    fontSize:30,
    borderRadius:15
  },
  buttonHeader: {
    // backgroundColor:'yellow',
    height:'50%',
    width:'10%',
    marginTop:'14%'
  },
});
