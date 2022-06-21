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
        <View style={styles.countdown}></View>
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
    backgroundColor:'blue',
    color:"blue",
    // alignItems: 'center',
     justifyContent: 'center',
  },
  midBody:{
    flex:90,
    backgroundColor:'red',
    alignItems: 'center',
   // justifyContent: 'center',
  },
  distanceButton:{
    width:'80%',
    height:'8%',
    backgroundColor:'pink',
    marginTop:'10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdown:{
    backgroundColor:'pink',
    width:'30%',
    height:'10%',
    marginTop:'10%'
  },
  set:{
    backgroundColor:'blue',
    width:'50%',
    height:'10%',
    marginTop:'10%',
    justifyContent:'center',
    alignItems:'center',
    fontSize:30
  },
  buttonHeader: {
    backgroundColor:'yellow',
    height:'50%',
    width:'10%'
  },
});
